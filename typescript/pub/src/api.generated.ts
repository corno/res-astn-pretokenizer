import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type createCharacterStreamConsumer = () => g_this.ASYNC.A.C.CreateCharacterStreamConsumer
    
    export type createStringStreamConsumer = () => g_this.ASYNC.A.C.CreateStringStreamConsumer
}

export type API = {
    readonly 'createCharacterStreamConsumer': A.createCharacterStreamConsumer
    readonly 'createStringStreamConsumer': A.createStringStreamConsumer
}