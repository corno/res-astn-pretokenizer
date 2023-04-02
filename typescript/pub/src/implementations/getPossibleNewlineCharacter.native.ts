import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.getPossibleNewlineCharacter = ($d) => {
    return ($) => {
        return pi.optional(
            $d.getPossibleSymbol($),
            ($) => {
                switch ($[0]) {
                    case 'carriage return':
                        return pi.cc($[1], ($) => {
                            return [true, ['carriage return', null]]
                        })
                    case 'line feed':
                        return pi.cc($[1], ($) => {
                            return [true, ['line feed', null]]
                        })
                    default: {
                        return [false]
                    }
                }
            },
            () => {
                return [false]
            }
        )
    }
}