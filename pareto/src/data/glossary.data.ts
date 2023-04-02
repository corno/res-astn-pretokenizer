import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference, aInterface, aInterfaceMethod, aInterfaceReference, constructor,
    data, externalTypeReference, group, imp, member, number, optional, ref, sfunction,
    streamconsumer, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

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
            "SymbolType": type(taggedUnion({
                "apostrophe": group({}),            // '
                "asterisk": group({}),              // *
                "backtick": group({}),              // `
                "carriage return": group({}),       // \r
                "close angle bracket": group({}),   // >
                "close brace": group({}),           // }
                "close bracket": group({}),         // ]
                "close parenthesis": group({}),     // )
                "colon": group({}),                 // :
                "comma": group({}),                 // ,
                "exclamation mark": group({}),      // !
                "line feed": group({}),             // \n
                "open angle bracket": group({}),    // <
                "open brace": group({}),            // {
                "open bracket": group({}),          // [
                "open parenthesis": group({}),      // (
                "quotation mark": group({}),        // "
                "reverse solidus": group({}),       // \
                "solidus": group({}),               // /
                "space": group({}),                 //
                "tab": group({}),                   // \t
                "vertical line": group({}),         // |
            })),
            "PossibleSymbol": type(optional(ref(typeReference("SymbolType")))),
            "StringBuilderConfiguration": type(group({
                "maximum string length": member(optional(number())),
            }))
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
            "GetPossibleSymbol": sfunction(typeReference("PossibleSymbol"), data(externalTypeReference("common", "Number"))),
            "IsHexadecimal": sfunction(externalTypeReference("common", "Boolean"), data(externalTypeReference("common", "Number"))),
        }),
    },
}