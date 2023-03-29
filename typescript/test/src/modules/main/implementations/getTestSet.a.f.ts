
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as pub from "../../../../../pub"

import * as mtest from "lib-pareto-test"
import * as mfs from "res-pareto-filesystem"
import * as mfsLib from "lib-pareto-filesystem"

export const $$: api.CgetTestSet = ($) => {

    // pl.logDebugMessage(`TD> ${$.testDirectory}`)

    // mfsLib.f_createReadDirectoryOrAbort({
    //     onError: ($) => {

    //     },
    //     readDirectory: mfs.f_readDirectory
    // })({
    //     path: [$.testDirectory, "errors"],
    // })._execute(($) => {
    //     $.forEach(() => true, ($, key) => {
    //         pl.logDebugMessage(key)
    //     })
    // })
    // // fs.f_readDirectory({
    // //     path: [ $.testDirectory, "errors" ],
    // // })._execute(($) => {

    // // })

    // const pt = pub.$a.createPretokenizer(
    //     {
    //         consumer: ($) => {

    //         },
    //         onError: ($) => {

    //         },
    //         toArrayOfCharacters: ($) => {
    //             pl.panic("!!!")
    //         }
    //     }
    // )

    // pt("FOO")

    const tokenizer = pub.$a.createPretokenizer(
        {
            'absolutePositionStart': 0,
            'firstCharacter': 1,
            'firstLine': 1,
            'whitespace': {
                'tab': 0x09,               // \t
                'line feed': 0x0A,         // \n
                'carriage return': 0x0D,   // \r
                'space': 0x20,             //
            },
        },
        {
            onError: ($) => {
                pl.logDebugMessage("ERROR")
            }
        }
    )(
        null,
        ($) => {
            // switch ($[0]) {
            //     case '': 
            //         pl.cc($[1], ($) => {

            //         })
            //         break
            //     default: pl.au($[0])
            // }
        }
    )
    tokenizer.onData("FOOBAR")

    const builder = pm.createUnsafeDictionaryBuilder<mtest.TTestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}