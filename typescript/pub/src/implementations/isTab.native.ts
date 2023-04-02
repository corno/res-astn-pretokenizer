import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.isTab = ($d) => {
    return ($) => {
        return pi.optional(
            $d.getPossibleSymbol($),
            ($) => {
                return $[0] === 'tab'
            },
            () => {
                return false
            }
        )
    }
}