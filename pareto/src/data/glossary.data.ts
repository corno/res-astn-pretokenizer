import * as pr from 'pareto-core-raw'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, number
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({
        "common": "glo-pareto-common",
        "tc": "glo-astn-tokenconsumer",
    }),
    'parameters': d({}),
    'templates': d({}),
    'types': types({
        "LineLocation": group({
            //first line in document has value 1
            "line": member(number()),
            //first character on a line has value 1
            "character": member(number()),
        }),
        "LocationInfo": group({
            "absolutePosition": member(number()),
            "lineLocation": member(reference("LineLocation"))
        }),
        "Pretoken": taggedUnion({
            "header start": group({
                "range": member(reference("Range")),
            }),
            "block comment begin": group({
                "range": member(reference("Range")),
            }),
            "block comment end": group({
                "range": member(reference("Range")),
            }),
            "line comment begin": group({
                "range": member(reference("Range")),
            }),
            "line comment end": group({
                "location": member(reference("LocationInfo")),
            }),
            "newline": group({
                "range": member(reference("Range")) //can be a range because it can be multiple characters (/r/n)
            }),
            "structural": group({
                "type": member(reference("tc", "StructuralTokenType")),
                "range": member(reference("Range")),
            }),
            "wrapped string begin": group({
                "type": member(reference("tc", "WrappedStringType")),
                "range": member(reference("Range")),
            }),
            "wrapped string end": group({
                "range": member(reference("Range")),
                //     wrapper: string | null
            }),
            "snippet": string(),
            "non wrapped string begin": group({
                "location": member(reference("LocationInfo")),
            }),
            "non wrapped string end": group({
                "location": member(reference("LocationInfo")),
            }),
            "whitespace begin": group({
                "location": member(reference("LocationInfo")),
            }),
            "whitespace end": group({
                "location": member(reference("LocationInfo")),
            }),
        }),
        "Range": group({
            "start": member(reference("LocationInfo")),
            "length": member(number()),
            "size": member(reference("RangeSize")),
        }),
        "RangeSize": taggedUnion({
            "singe line": group({
                "column offset": member(number()),
            }),
            "multiline": group({
                "line offset": member(number()),
                "column": member(number()),
            }),
        }),
    }),
    'interfaces': d({
        "StringStreamConsumer": ['group', { //REPLACE BY THE STRINGSTREAMCONSUMER IN GLO-PARETO-COMMON
            'members': d({
                "onData": method(typeReference("common", "String")),
                "onEnd": method(null),
            }),
        }],
        "PretokenHandler": method(typeReference("Pretoken"))
    }),
    'functions': d({
        "Pretokenize": func(typeReference("common", "Null"), null, interfaceReference("PretokenHandler"), inf(interfaceReference("StringStreamConsumer")))
    }),
}