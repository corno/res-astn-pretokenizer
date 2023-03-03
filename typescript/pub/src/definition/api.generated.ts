import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreatePretokenizer = ($: gthis.T.PretokenizerConfigurationData, $d: {
    readonly 'onError': gthis.FOnError
}) => gthis.FPretokenize

export type API = {
    createPretokenizer: CcreatePretokenizer
}