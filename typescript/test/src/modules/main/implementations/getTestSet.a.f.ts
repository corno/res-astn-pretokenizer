
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import { A } from "../api.generated"

import * as g_pub from "../../../../../pub"

import * as g_test from "lib-pareto-test"

export const $$: A.getTestSet = ($) => {

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

    const csc = g_pub.$r.createCharacterStreamConsumer().construct({
        'handler': ($) => {
            pd.logDebugMessage($)
        }
    })

    //Hello world!
    csc.data(0x48)
    csc.data(0x65)
    csc.data(0x6c)
    csc.data(0x6c)
    csc.data(0x6f)
    csc.data(0x20)
    csc.data(0x77)
    csc.data(0x6f)
    csc.data(0x72)
    csc.data(0x6c)
    csc.data(0x64)
    csc.data(0x21)
    csc.end()



    const ssc = g_pub.$r.createStringStreamConsumer().construct({
        'handler': {
            'data': ($) => {
            },
            'end': () => {
                //
            }
        }
    })
    ssc.data("Foo")
    ssc.data("Bar")
    ssc.end()


    const builder = pm.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
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

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}