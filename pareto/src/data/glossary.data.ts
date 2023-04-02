import * as pd from 'pareto-core-data'

import { aExternalInterfaceReference, aInterface, aInterfaceMethod, aInterfaceReference, boolean, constructor, data, externalTypeReference, group, imp, member, number, optional, ref, sfunction, streamconsumer, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

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
            "CharacterPositionType": type(taggedUnion({
                "line feed": group({}),
                "carriage return": group({}),
                "tab": group({}),
                "other": group({})
            })),
            "StringWrapCharacter": type(taggedUnion({
                "quotation mark": group({}),        // "
                "apostrophe": group({}),            // '
                "backtick": group({}),              // `
            })),
            "NonWrappedCharacterType": type(taggedUnion({
                "solidus": group({}),               // /

                "quotation mark": group({}),        // "
                "apostrophe": group({}),            // '
                "backtick": group({}),              // `

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

                "whitespace": group({}),
                "other": group({}),
            })),

            "WhitespaceCharacter": type(taggedUnion({
                "tab": group({}),                   // /t
                "space": group({}),                 //  
            })),
            "PossibleWhitespaceCharacter": type(optional(ref(typeReference("WhitespaceCharacter")))),



            // "nontoken": member(optional(taggedUnion({

            // }))),
            // "comment": member(optional(taggedUnion({
            //     "asterisk": group({}),              // *
            //     "solidus": group({}),               // /
            // }))),
            // "unicode": member(boolean()), // 0-9 a-f A-F
            // "whitespace": member(optional(ref(typeReference("Whitespace")))),
            // "wrapped string": member(optional(taggedUnion({
            //     "wrapper": ref(typeReference("Wrapper")),

            //     "reverse solidus": group({}),       // \
            // }))),
            // "escape": member(optional(taggedUnion({

            //     "wrapper": ref(typeReference("Wrapper")),

            //     "reverse solidus": group({}),       // \
            //     "solidus": group({}),               // /
            //     "b": group({}),                     // b
            //     "f": group({}),                     // f
            //     "n": group({}),                     // n
            //     "r": group({}),                     // r
            //     "t": group({}),                     // t
            //     "u": group({}),                     // u
            // }))),

            // "Whitespace": type(taggedUnion({

            // })),
            // "WhitespaceOrNewline": type(boolean()),
            // "Wrapper": type(taggedUnion({

            // }))
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "StringStreamConsumer": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null)
            )),
            "CharacterStreamConsumer": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "Number")),
                aInterfaceMethod(null)
            )),
        }),
        'algorithms': d({
            "CreateStringSplitter": constructor(aInterfaceReference("StringStreamConsumer"), {
                "handler": aInterfaceReference("CharacterStreamConsumer")
            }),
            "CreateStringFromCharactersBuilder": constructor(aInterfaceReference("CharacterStreamConsumer"), {
                "handler": aExternalInterfaceReference("common", "String")
            }),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetCharacterPositionType": sfunction(typeReference("CharacterPositionType"), data(externalTypeReference("common", "Number"))),
            "GetNonWrappedCharacterType": sfunction(typeReference("NonWrappedCharacterType"), data(externalTypeReference("common", "Number"))),

            "IsHexadecimal": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            "IsAsterisk": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),

            // "GetStartCharacter": sfunction(typeReference("PossibleStartCharacter"), data(externalTypeReference("common", "Number"))),
            // "GetWhitespaceCharacter": sfunction(typeReference("PossibleWhitespaceCharacter"), data(externalTypeReference("common", "Number"))),

            // "IsUnicodeCharacter": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsAsterisk": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsLineFeed": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsCarriageReturn": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsQuote": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsApostrophe": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsBacktick": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
            // "IsEscapableCharacter": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
        }),
    },
}