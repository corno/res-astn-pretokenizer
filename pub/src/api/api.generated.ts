import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreatePretokenizer = ($: gglo.T.PretokenizerConfigurationData, $d: {
    readonly 'onError': gglo.FOnError
}) => gglo.FPretokenize

export type API = {
    createPretokenizer: CcreatePretokenizer
}