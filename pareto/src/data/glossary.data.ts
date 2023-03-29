import * as pd from 'pareto-core-data'

import { group, member, number, ref, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Error": type(group({
                "type": member(taggedUnion({
                    "unterminated block comment": group({}),
                    "found dangling slash at the end of the text": group({}),
                    "unterminated string": group({}),
                    // | ["found dangling slash", null]
                    // | ["expected hexadecimal digit", {
                    //     readonly "found": string
                    // }]
                    // | ["expected special character after escape slash", {
                    //     readonly "found": string
                    // }]  
                })),
                "location": member(ref(typeReference("LocationInfo"))),
            })),
            "LineLocation": type(group({
                //first line in document has value 1
                "line": member(number()),
                //first character on a line has value 1
                "character": member(number()),
            })),
            "LocationInfo": type(group({
                "absolutePosition": member(number()),
                "lineLocation": member(ref(typeReference("LineLocation"))),
            })),
            "Pretoken": type(group({
                "type": member(taggedUnion({
                    "header start": group({
                    }),
                    "block comment begin": group({
                    }),
                    "block comment end": group({
                    }),
                    "line comment begin": group({
                    }),
                    "line comment end": group({
                    }),
                    "newline": group({
                    }),
                    "structural": group({
                        //"type": member(reference("tc", "StructuralTokenType")),
                    }),
                    "wrapped string begin": group({
                        //"type": member(reference("tc", "WrappedStringType")),
                    }),
                    "wrapped string end": group({
                        //     wrapper: string | null
                    }),
                    "snippet": string(),
                    "non wrapped string begin": group({
                    }),
                    "non wrapped string end": group({
                    }),
                    "whitespace begin": group({
                    }),
                    "whitespace end": group({
                    }),
                })),
                "location": member(ref(typeReference("LocationInfo"))),
            })),
            "PretokenizerConfigurationData": type(group({
                "absolutePositionStart": member(number()),
                "firstLine": member(number()),
                "firstCharacter": member(number()),
                "whitespace": member(group({

                    "carriage return": member(number()),
                    "line feed": member(number()),
                    "space": member(number()),
                    "tab": member(number()),

                })),

            })),
            "Range": type(group({
                "start": member(ref(typeReference("LocationInfo"))),
                "length": member(number()),
                "size": member(ref(typeReference("RangeSize"))),
            })),
            "RangeSize": type(taggedUnion({
                "singe line": group({
                    "column offset": member(number()),
                }),
                "multiline": group({
                    "line offset": member(number()),
                    "column": member(number()),
                }),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            // "PretokenHandler": method(typeReference("Pretoken")),

            //  "OnError": func(typeReference("Error"), null, null, null),

        }),
        'algorithms': d({
            //"Pretokenize": func(typeReference("common", "Null"), null, interfaceReference("PretokenHandler"), inf(interfaceReference("StringStreamConsumer"))),

        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}