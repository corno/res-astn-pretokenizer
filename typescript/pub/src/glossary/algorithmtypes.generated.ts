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
                    readonly 'handler': g_common.ASYNC.I.String
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
            export type GetCharacterPositionType = ($: g_common.T.Number) => T.CharacterPositionType
        }
        
        
        export namespace F {
            export type GetCommentCharacter = ($: g_common.T.Number) => T.CommentCharacter
        }
        
        
        export namespace F {
            export type GetNonWrappedCharacterType = ($: g_common.T.Number) => T.NonWrappedCharacterType
        }
        
        
        export namespace F {
            export type IsAsterisk = ($: g_common.T.Number) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type IsHexadecimal = ($: g_common.T.Number) => g_common.T.Boolean
        }
    }
}