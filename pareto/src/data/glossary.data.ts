import * as pd from 'pareto-core-data'

import { aExternalInterfaceReference, aInterface, aInterfaceMethod, aInterfaceReference, boolean, constructor, externalTypeReference, group, imp, member, number, optional, ref, streamconsumer, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Character": type(group({
                "code": member(number()),
                "type": member(group({
                    "nontoken": member(optional(taggedUnion({
                        "asterisk": group({}),              // *
                        "solidus": group({}),               // /

                        "wrapper": ref(typeReference("Wrapper")),

                        "exclamation mark": group({}),      // !
                        "vertical line": group({}),         // |
                        "comma": group({}),                 // ,
                        "colon": group({}),                 // :
                        "open brace": group({}),            // {
                        "close brace": group({}),           // }
                        "open parenthesis": group({}),      // (
                        "close parenthesis": group({}),     // )
                        "open bracket": group({}),          // [
                        "close bracket": group({}),         // ]
                        "open angle bracket": group({}),    // <
                        "close angle bracket": group({}),   // >

                        "whitespace": ref(typeReference("Whitespace"))
                    }))),
                    "comment": member(optional(taggedUnion({
                        "asterisk": group({}),              // *
                        "solidus": group({}),               // /
                    }))),
                    "unicode": member(boolean()), // 0-9 a-f A-F
                    "whitespace": member(optional(ref(typeReference("Whitespace")))),
                    "wrapped string": member(optional(taggedUnion({
                        "wrapper": ref(typeReference("Wrapper")),
                        
                        "reverse solidus": group({}),       // \
                    }))),
                    "escape": member(optional(taggedUnion({
                        
                        "wrapper": ref(typeReference("Wrapper")),

                        "reverse solidus": group({}),       // \
                        "solidus": group({}),               // /
                        "b": group({}),                     // b
                        "f": group({}),                     // f
                        "n": group({}),                     // n
                        "r": group({}),                     // r
                        "t": group({}),                     // t
                        "u": group({}),                     // u
                    }))),
                }))
            })),
            "Whitespace": type(taggedUnion({
                "tab": group({}),                   // /t
                "line feed": group({}),             // /n
                "carriage return": group({}),       // /r
                "space": group({}),                 //  
            })),
            "Wrapper": type(taggedUnion({
                "quotation mark": group({}),        // "
                "apostrophe": group({}),            // '
                "backtick": group({}),              // `
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "StringStreamConsumer": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null)
            )),
            "CharacterCodeStreamConsumer": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "Number")),
                aInterfaceMethod(null)
            )),
            "CharacterStreamHandler": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("Character")),
                aInterfaceMethod(null)
            )),
        }),
        'algorithms': d({
            "CreateStringSplitter": constructor(aInterfaceReference("StringStreamConsumer"), {
                "handler": aInterfaceReference("CharacterStreamHandler")
            }),
            "CreateStringFromCharactersBuilder": constructor(aInterfaceReference("CharacterCodeStreamConsumer"), {
                "handler": aExternalInterfaceReference("common", "String")
            }),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}