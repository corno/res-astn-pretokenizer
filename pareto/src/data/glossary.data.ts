import * as pd from 'pareto-core-data'

import { aExternalInterfaceReference, aInterface, aInterfaceMethod, aInterfaceReference, constructor, externalTypeReference, group, member, number, optional, ref, streamconsumer, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Character": type(group({
                "code": member(number()),
                "type": member(group({
                    "comment": member(optional(taggedUnion({
                        "asterisk": group({}),              // *
                        "solidus": group({}),               // /
                    }))),
                    "structural": member(optional(taggedUnion({
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
                    }))),
                    "unicode": member(optional(group({}))), // 0-9 a-f A-F
                    "whitespace": member(optional(taggedUnion({
                        "tab": group({}),                   // /t
                        "line feed": group({}),             // /n
                        "carriage return": group({}),       // /r
                        "space": group({}),                 //  
                    }))),
                    "wrapped string": member(optional(taggedUnion({
                        "question mark": group({}),         // ?
                        "apostrophe": group({}),            // '
                        "backtick": group({}),              // `
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