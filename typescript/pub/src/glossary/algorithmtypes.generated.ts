import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type CharacterCodeStreamConsumer = {
            'data': ($: g_common.T.Number, ) => void
            'end': () => void
        }
        
        export type CharacterStreamHandler = {
            'data': ($: T.Character, ) => void
            'end': () => void
        }
        
        export type StringStreamConsumer = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateCharacterStreamConsumer = {
                'construct': ($is: {
                    readonly 'handler': g_common.ASYNC.I.String
                }) => ASYNC.I.CharacterCodeStreamConsumer
            }
        }
        
        
        export namespace C {
            export type CreateStringStreamConsumer = {
                'construct': ($is: {
                    readonly 'handler': ASYNC.I.CharacterStreamHandler
                }) => ASYNC.I.StringStreamConsumer
            }
        }
    }
}

export namespace SYNC {}