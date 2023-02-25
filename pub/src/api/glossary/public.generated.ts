import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type IPretokenHandler = ($: T.Pretoken, ) => void

export type IStringStreamConsumer = {
    'onData': ($: gcommon.T.String, ) => void
    'onEnd': () => void
}

export type FOnError = ($: T.Error,) => void

export type FPretokenize = ($: gcommon.T.Null, $i: IPretokenHandler,) => IStringStreamConsumer