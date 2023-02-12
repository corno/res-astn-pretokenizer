import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreatePretokenizer = ($: glo.T.PretokenizerConfigurationData, $d: {
    readonly 'onError': glo.FOnError
}) => glo.FPretokenize

export type API = {
    createPretokenizer: CcreatePretokenizer
}