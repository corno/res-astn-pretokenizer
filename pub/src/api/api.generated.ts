import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreatePretokenizer = ($: glo.TPretokenizerConfigurationData, $d: {
    readonly 'onError': glo.FOnError
}) => glo.FPretokenize

export type API = {
    createPretokenizer: CcreatePretokenizer
}