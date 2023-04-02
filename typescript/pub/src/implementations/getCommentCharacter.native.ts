import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.getCommentCharacter = ($d) => {
    return ($) => {
        return pi.optional(
            $d.getPossibleSymbol($),
            ($) => {
                switch ($[0]) {
                    case 'solidus':
                        return pi.cc($[1], ($) => {
                            return ['solidus', null]
                        })
                    case 'asterisk':
                        return pi.cc($[1], ($) => {
                            return ['asterisk', null]
                        })
                    default: {
                        return ['illegal', null]
                    }
                }
            },
            () => {
                return ['illegal', null]
            }
        )
    }
}