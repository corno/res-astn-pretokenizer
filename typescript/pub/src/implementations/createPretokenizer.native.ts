import * as pt from 'pareto-core-types'
import * as pi from 'pareto-core-internals'

import * as api from "../api"

type X = {
    charCode: number
}

function splitString($: string): pt.Array<X> {
    const out: X[] = []
    for (let i = 0; i !== $.length; i += 1) {
        out.push({
            charCode: $.charCodeAt(i)
        })
    }
    return pi.wrapRawArray(out)
}
function isEqual($: {
    a: number,
    b: number,
}): boolean {
    return $.a === $.b
}
function increment($: number) {
    return $ + 1
}

export const $$: api.CcreatePretokenizer = ($c, $d) => {

    type Optional<T> =
        | [false]
        | [true, T]

    function handleOptional<T>(
        $: Optional<T>,
        onSet: ($: T) => void,
        onNotSet?: () => void,
    ) {
        if ($[0] === true) {
            onSet($[1])
        } else {
            if (onNotSet !== undefined) {
                onNotSet()
            }
        }
    }

    type SCurrentToken =
        | ["block comment", SBlockCommentContext]
        | ["line comment", {}]
        | ["none", SNoneContext]
        | ["non wrapped string", {}]
        | ["wrapped string", SStringContext]
        | ["whitespace", {}]

    type SBlockCommentContext = {
        'locationOfFoundAsterisk': Optional<api.TLocationInfo>
    }

    type SFoundNewlineCharacter = {
        'type':
        | ["carriage return", {}]
        | ["line feed", {}]
        'startLocation': api.TLocationInfo
    }

    type SNoneContext = {
        'found':
        | ['nothing', {}]
        | ['newlineCharacter', SFoundNewlineCharacter]
        | ['solidus', api.TLocationInfo]
    }

    type SStringContext = {
        'slashed': boolean
        'startCharacter': number
        'unicode': null | SUnicode
        'foundNewlineCharacter': Optional<SFoundNewlineCharacter>
    }

    type SUnicode = {
        'charactersLeft': number
        'foundCharacters': ""
    }

    type SState = {
        'currentToken': SCurrentToken
        'location': {
            'foundNewlineCharacter': Optional<SFoundNewlineCharacter>
            'absolutePosition': number
            'line': number,
            'character': number,
        },
        //'snippet':
    }

    const $s: SState = {
        'currentToken': ["none", {
            'found': ['nothing', {}]
        }],
        'location': {
            'foundNewlineCharacter': [false],
            'absolutePosition': $c.absolutePositionStart,
            'line': $c.firstLine,
            'character': $c.firstCharacter,

        }
    }


    return ($, $i) => {
        function createLocation(): api.TLocationInfo {
            return {
                'absolutePosition': $s.location.absolutePosition,
                'lineLocation': {
                    'character': $s.location.character,
                    'line': $s.location.line,
                }
            }
        }
        function onError($: api.GError.Ptype) {
            $d.onError({
                'type': $,
                'location': createLocation()
            })
        }
        function onPretoken($: api.GPretoken.Ptype) {
            $i({
                'type': $,
                'location': createLocation()
            })
        }
        function flushSnippet() {
            onPretoken(['snippet', "SDFSFSFSD"])
        }
        return {
            onData: ($) => {
                splitString($).forEach(($) => {
                    $s.location.absolutePosition = increment($s.location.absolutePosition)
                    { //update the line and character
                        const location = $s.location
                        handleOptional(
                            $s.location.foundNewlineCharacter,
                            ($s) => {
                                location.line = increment(location.line)
                                location.character = pi.cc(($s.type), ($s) => {
                                    switch ($s[0]) {
                                        case 'carriage return':
                                            return pi.cc($s[1], ($s) => {
                                                return isEqual({ 'a': $.charCode, 'b': $c.whitespace['line feed'] })
                                                    ? $c.firstCharacter
                                                    : increment($c.firstCharacter) //this is already the next character
                                            })
                                        case 'line feed':
                                            return pi.cc($s[1], ($s) => {
                                                return isEqual({ 'a': $.charCode, 'b': $c.whitespace['carriage return'] })
                                                    ? $c.firstCharacter
                                                    : increment($c.firstCharacter) //this is already the next character
                                            })
                                        default: return pi.au($s[0])
                                    }
                                })
                                location.foundNewlineCharacter = [false]
                            },
                            () => {
                                location.character = increment(location.character)
                                if (isEqual({ 'a': $.charCode, 'b': $c.whitespace['carriage return'] })) {
                                    location.foundNewlineCharacter = [true, {
                                        'startLocation': createLocation(),
                                        'type': ['carriage return', {}],
                                    }]
                                } else {
                                    if (isEqual({ 'a': $.charCode, 'b': $c.whitespace['line feed'] })) {
                                        location.foundNewlineCharacter = [true, {
                                            'startLocation': createLocation(),
                                            'type': ['line feed', {}],
                                        }]
                                    } else {
                                        //nothing to do
                                    }
                                }
                            }
                        )
                    }
                    switch ($s.currentToken[0]) {
                        case 'block comment':
                            pi.cc($s.currentToken[1], ($s) => {

                            })
                            break
                        case 'line comment':
                            pi.cc($s.currentToken[1], ($s) => {

                            })
                            break
                        case 'non wrapped string':
                            pi.cc($s.currentToken[1], ($s) => {

                            })
                            break
                        case 'none':
                            pi.cc($s.currentToken[1], ($s) => {

                            })
                            break
                        case 'whitespace':
                            pi.cc($s.currentToken[1], ($s) => {
                            })
                            break
                        case 'wrapped string':
                            pi.cc($s.currentToken[1], ($s) => {

                            })
                            break
                        default: pi.au($s.currentToken[0])
                    }
                })
            },
            onEnd: () => {
                switch ($s.currentToken[0]) {
                    case 'block comment':
                        pi.cc($s.currentToken[1], ($s) => {
                            onError(['unterminated block comment', {}])
                            flushSnippet()
                            onPretoken(['block comment end', {}])
                        })
                        break
                    case 'line comment':
                        pi.cc($s.currentToken[1], ($s) => {
                            flushSnippet()
                            onPretoken(['line comment end', {}])
                        })
                        break
                    case 'non wrapped string':
                        pi.cc($s.currentToken[1], ($s) => {
                            flushSnippet()
                            onPretoken(['non wrapped string end', {}])
                        })
                        break
                    case 'none':
                        pi.cc($s.currentToken[1], ($s) => {
                            switch ($s.found[0]) {
                                case 'newlineCharacter':
                                    pi.cc($s.found[1], ($s) => {
                                        onPretoken(['newline', {}])
                                    })
                                    break
                                case 'nothing':
                                    pi.cc($s.found[1], ($s) => {

                                    })
                                    break
                                case 'solidus':
                                    pi.cc($s.found[1], ($s) => {
                                        onError(['found dangling slash at the end of the text', {}])
                                    })
                                    break
                                default: pi.au($s.found[0])
                            }
                        })
                        break
                    case 'whitespace':
                        pi.cc($s.currentToken[1], ($s) => {
                            flushSnippet()
                            onPretoken(['whitespace end', {}])
                        })
                        break
                    case 'wrapped string':
                        pi.cc($s.currentToken[1], ($s) => {
                            onError(['unterminated string', {}])
                            flushSnippet()
                            onPretoken(['wrapped string end', {}])
                        })
                        break
                    default: pi.au($s.currentToken[0])
                }

            }
        }
    }
}