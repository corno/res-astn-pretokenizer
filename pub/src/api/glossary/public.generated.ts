import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TError = t.UError

export type TLineLocation = t.ULineLocation

export type TLocationInfo = t.ULocationInfo

export type TPretoken = t.UPretoken

export type TPretokenizerConfigurationData = t.UPretokenizerConfigurationData

export type TRange = t.URange

export type TRangeSize = t.URangeSize

export type IPretokenHandler = ($: TPretoken, ) => void

export type IStringStreamConsumer = {
    'onData': ($: mcommon.TString, ) => void
    'onEnd': () => void
}

export type FOnError = ($: TError,) => void

export type FPretokenize = ($: mcommon.TNull, $i: IPretokenHandler,) => IStringStreamConsumer