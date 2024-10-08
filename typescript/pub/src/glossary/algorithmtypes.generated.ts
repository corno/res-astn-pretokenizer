import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type CharacterStreamConsumer = {
            'data': ($: g_common.T.Number, ) => void
            'end': () => void
        }
        
        export type StringStreamConsumer = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateStringFromCharactersBuilder = {
                'construct': ($is: {
                    readonly 'handler': g_common.ASYNC.I.StringStream
                }) => ASYNC.I.CharacterStreamConsumer
            }
        }
        
        
        export namespace C {
            export type CreateStringSplitter = {
                'construct': ($is: {
                    readonly 'handler': ASYNC.I.CharacterStreamConsumer
                }) => ASYNC.I.StringStreamConsumer
            }
        }
    }
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type GetPossibleSymbol = ($: g_common.T.Number) => T.PossibleSymbol
        }
        
        
        export namespace F {
            export type GetPossibleWhitespace = ($: g_common.T.Number) => T.PossibleWhitespace
        }
        
        
        export namespace F {
            export type IsHexadecimalCharacter = ($: g_common.T.Number) => g_common.T.Boolean
        }
    }
}