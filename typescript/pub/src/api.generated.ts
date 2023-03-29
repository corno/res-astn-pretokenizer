import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    export type createPretokenizer = {
        readonly 'onError': g_this.SYNC.A.P.OnError
    }
}

export namespace A {
    
    export type createPretokenizer = ($: g_this.T.PretokenizerConfigurationData, $d: D.createPretokenizer, ) => g_this.SYNC.A.F.Pretokenize
}

export type API = {
    readonly 'createPretokenizer': A.createPretokenizer
}