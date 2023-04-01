import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type createStringFromCharactersBuilder = () => g_this.ASYNC.A.C.CreateStringFromCharactersBuilder
    
    export type createStringSplitter = () => g_this.ASYNC.A.C.CreateStringSplitter
}

export type API = {
    readonly 'createStringFromCharactersBuilder': A.createStringFromCharactersBuilder
    readonly 'createStringSplitter': A.createStringSplitter
}