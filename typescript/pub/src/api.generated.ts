import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    export type getCommentCharacter = {
        readonly 'getPossibleSymbol': g_this.SYNC.A.F.GetPossibleSymbol
    }
    
    export type getNonWrappedCharacterType = {
        readonly 'getPossibleSymbol': g_this.SYNC.A.F.GetPossibleSymbol
    }
    
    export type getPossibleNewlineCharacter = {
        readonly 'getPossibleSymbol': g_this.SYNC.A.F.GetPossibleSymbol
    }
    
    
    
    export type isTab = {
        readonly 'getPossibleSymbol': g_this.SYNC.A.F.GetPossibleSymbol
    }
}

export namespace A {
    
    export type createStringFromCharactersBuilder = () => g_this.ASYNC.A.C.CreateStringFromCharactersBuilder
    
    export type createStringSplitter = () => g_this.ASYNC.A.C.CreateStringSplitter
    
    export type getCommentCharacter = ($d: D.getCommentCharacter, ) => g_this.SYNC.A.F.GetCommentCharacter
    
    export type getNonWrappedCharacterType = ($d: D.getNonWrappedCharacterType, ) => g_this.SYNC.A.F.GetNonWrappedCharacterType
    
    export type getPossibleNewlineCharacter = ($d: D.getPossibleNewlineCharacter, ) => g_this.SYNC.A.F.GetPossibleNewlineCharacter
    
    export type getPossibleSymbol = () => g_this.SYNC.A.F.GetPossibleSymbol
    
    export type isHexadecimal = () => g_this.SYNC.A.F.IsHexadecimal
    
    export type isTab = ($d: D.isTab, ) => g_this.SYNC.A.F.IsTab
}

export type API = {
    readonly 'createStringFromCharactersBuilder': A.createStringFromCharactersBuilder
    readonly 'createStringSplitter': A.createStringSplitter
    readonly 'getCommentCharacter': A.getCommentCharacter
    readonly 'getNonWrappedCharacterType': A.getNonWrappedCharacterType
    readonly 'getPossibleNewlineCharacter': A.getPossibleNewlineCharacter
    readonly 'getPossibleSymbol': A.getPossibleSymbol
    readonly 'isHexadecimal': A.isHexadecimal
    readonly 'isTab': A.isTab
}