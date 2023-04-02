import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
    
}

export namespace A {
    
    export type createStringFromCharactersBuilder = () => g_this.ASYNC.A.C.CreateStringFromCharactersBuilder
    
    export type createStringSplitter = () => g_this.ASYNC.A.C.CreateStringSplitter
    
    export type getCharacterPositionType = () => g_this.SYNC.A.F.GetCharacterPositionType
    
    export type getCommentCharacter = () => g_this.SYNC.A.F.GetCommentCharacter
    
    export type getNonWrappedCharacterType = () => g_this.SYNC.A.F.GetNonWrappedCharacterType
    
    export type getPossibleNewlineCharacter = () => g_this.SYNC.A.F.GetPossibleNewlineCharacter
    
    export type isAsterisk = () => g_this.SYNC.A.F.IsAsterisk
    
    export type isHexadecimal = () => g_this.SYNC.A.F.IsHexadecimal
}

export type API = {
    readonly 'createStringFromCharactersBuilder': A.createStringFromCharactersBuilder
    readonly 'createStringSplitter': A.createStringSplitter
    readonly 'getCharacterPositionType': A.getCharacterPositionType
    readonly 'getCommentCharacter': A.getCommentCharacter
    readonly 'getNonWrappedCharacterType': A.getNonWrappedCharacterType
    readonly 'getPossibleNewlineCharacter': A.getPossibleNewlineCharacter
    readonly 'isAsterisk': A.isAsterisk
    readonly 'isHexadecimal': A.isHexadecimal
}