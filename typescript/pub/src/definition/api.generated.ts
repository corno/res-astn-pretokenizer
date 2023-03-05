import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createPretokenizer = ($: g_this.T.PretokenizerConfigurationData, $d: {
    readonly 'onError': g_this.F.OnError
}) => g_this.F.Pretokenize

export type API = {
    createPretokenizer: createPretokenizer
}