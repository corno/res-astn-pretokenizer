import * as pi from 'pareto-core-internals'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createStringSplitter = () => {
    return {
        'construct': ($is) => {
            return {
                'data': ($) => {
                    for (let i = 0; i !== $.length; i += 1) {
                        const code = $.charCodeAt(i)

                        function whiteSpace(): pt.OptionalValue<g_this.T.Whitespace> {
                            switch (code) {
                                case 0x09: return [true, ['tab', null]]
                                case 0x0A: return [true, ['line feed', null]]
                                case 0x0D: return [true, ['carriage return', null]]
                                case 0x20: return [true, ['space', null]]
                                default: {
                                    return [false]
                                }
                            }
                        }
                        function wrapper(): pt.OptionalValue<g_this.T.Wrapper> {
                            switch (code) {
                                case 0x22: return [true, ['quotation mark', null]]
                                case 0x27: return [true, ['apostrophe', null]]
                                case 0x60: return [true, ['backtick', null]]
                                default: {
                                    return [false]
                                }
                            }
                        }
                        $is.handler.data({
                            'code': code,
                            'type': {
                                'comment': pi.cc(code, ($): g_this.T.Character._ltype.comment => {
                                    switch (code) {
                                        case 0x2A: return [true, ['asterisk', null]]
                                        case 0x2F: return [true, ['solidus', null]]
                                        default: {
                                            return [false]
                                        }
                                    }
                                }),
                                'nontoken': pi.cc(code, ($): g_this.T.Character._ltype.nontoken => {
                                    switch (code) {
                                        case 0x2A: return [true, ['asterisk', null]]
                                        case 0x2F: return [true, ['solidus', null]]

                                        case 0x21: return [true, ['exclamation mark', null]]
                                        case 0x7C: return [true, ['vertical line', null]]
                                        case 0x2C: return [true, ['comma', null]]
                                        case 0x3A: return [true, ['colon', null]]
                                        case 0x7B: return [true, ['open brace', null]]
                                        case 0x7D: return [true, ['close brace', null]]
                                        case 0x28: return [true, ['open parenthesis', null]]
                                        case 0x29: return [true, ['close parenthesis', null]]
                                        case 0x5B: return [true, ['open bracket', null]]
                                        case 0x5D: return [true, ['close bracket', null]]
                                        case 0x3C: return [true, ['open angle bracket', null]]
                                        case 0x3E: return [true, ['close angle bracket', null]]

                                        default: {
                                            return pi.optional(
                                                whiteSpace(),
                                                ($): g_this.T.Character._ltype.nontoken => {
                                                    return [true, ['whitespace', $]]
                                                },
                                                () => {
                                                    return pi.optional(
                                                        wrapper(),
                                                        ($): g_this.T.Character._ltype.nontoken => {
                                                            return [true, ['wrapper', $]]
                                                        },
                                                        () => {
                                                            return [false]
                                                        }
                                                    )
                                                }
                                            )
                                        }
                                    }
                                }),
                                'unicode': pi.cc(code, ($): g_this.T.Character._ltype.unicode => {
                                    if (code >= 0x30 && code <= 0x39) { // 0-9
                                        return true
                                    }
                                    if (code >= 0x41 && code <= 0x46) { // A-F
                                        return true
                                    }
                                    if (code >= 0x61 && code <= 0x66) { // a-f
                                        return true
                                    }
                                    return false
                                }),
                                'whitespace': whiteSpace(),
                                'wrapped string': pi.cc(code, ($): g_this.T.Character._ltype.wrapped__string => {
                                    switch (code) {

                                        case 0x5c: return [true, ['reverse solidus', null]]
                                        default: {
                                            return pi.optional(
                                                wrapper(),
                                                ($): g_this.T.Character._ltype.wrapped__string => {
                                                    return [true, ['wrapper', $]]
                                                },
                                                () => {
                                                    return [false]
                                                }
                                            )
                                        }
                                    }
                                }),
                                'escape': pi.cc(code, ($): g_this.T.Character._ltype.escape => {
                                    switch (code) {

                                        case 0x62: return [true, ['b', null]]
                                        case 0x66: return [true, ['f', null]]
                                        case 0x6E: return [true, ['n', null]]
                                        case 0x72: return [true, ['r', null]]
                                        case 0x74: return [true, ['t', null]]
                                        case 0x75: return [true, ['u', null]]

                                        case 0x5c: return [true, ['reverse solidus', null]]

                                        default: {
                                            return pi.optional(
                                                wrapper(),
                                                ($): g_this.T.Character._ltype.escape => {
                                                    return [true, ['wrapper', $]]
                                                },
                                                () => {
                                                    return [false]
                                                }
                                            )
                                        }
                                    }
                                }),
                            }
                        })
                    }
                },
                'end': () => {
                    $is.handler.end()
                },
            }
        }
    }
}