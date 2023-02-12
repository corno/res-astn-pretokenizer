import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type IPretokenHandler = ($: T.Pretoken, ) => void

export type IStringStreamConsumer = {
    'onData': ($: mcommon.T.String, ) => void
    'onEnd': () => void
}

export type FOnError = ($: T.Error,) => void

export type FPretokenize = ($: mcommon.T.Null, $i: IPretokenHandler,) => IStringStreamConsumer