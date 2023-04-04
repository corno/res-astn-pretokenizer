import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
}

export namespace A {
    
    export type createStringFromCharactersBuilder = ($: g_this.T.StringBuilderConfiguration, ) => g_this.ASYNC.A.C.CreateStringFromCharactersBuilder
    
    export type createStringSplitter = () => g_this.ASYNC.A.C.CreateStringSplitter
    
    export type getPossibleSymbol = () => g_this.SYNC.A.F.GetPossibleSymbol
    
    export type getPossibleWhitespace = () => g_this.SYNC.A.F.GetPossibleWhitespace
    
    export type isHexadecimal = () => g_this.SYNC.A.F.IsHexadecimal
}

export type API = {
    readonly 'createStringFromCharactersBuilder': A.createStringFromCharactersBuilder
    readonly 'createStringSplitter': A.createStringSplitter
    readonly 'getPossibleSymbol': A.getPossibleSymbol
    readonly 'getPossibleWhitespace': A.getPossibleWhitespace
    readonly 'isHexadecimal': A.isHexadecimal
}