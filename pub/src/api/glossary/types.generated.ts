import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mtc from "glo-astn-tokenconsumer"

export namespace GLineLocation {}
export type GLineLocation = {
    readonly 'character': number
    readonly 'line': number
}
export type ULineLocation = GLineLocation

export namespace GLocationInfo {}
export type GLocationInfo = {
    readonly 'absolutePosition': number
    readonly 'lineLocation': ULineLocation
}
export type ULocationInfo = GLocationInfo

export namespace GPretoken {
    
    export namespace Oblock__comment__begin {}
    export type Oblock__comment__begin = {
        readonly 'range': URange
    }
    
    export namespace Oblock__comment__end {}
    export type Oblock__comment__end = {
        readonly 'range': URange
    }
    
    export namespace Oheader__start {}
    export type Oheader__start = {
        readonly 'range': URange
    }
    
    export namespace Oline__comment__begin {}
    export type Oline__comment__begin = {
        readonly 'range': URange
    }
    
    export namespace Oline__comment__end {}
    export type Oline__comment__end = {
        readonly 'location': ULocationInfo
    }
    
    export namespace Onewline {}
    export type Onewline = {
        readonly 'range': URange
    }
    
    export namespace Onon__wrapped__string__begin {}
    export type Onon__wrapped__string__begin = {
        readonly 'location': ULocationInfo
    }
    
    export namespace Onon__wrapped__string__end {}
    export type Onon__wrapped__string__end = {
        readonly 'location': ULocationInfo
    }
    
    export namespace Ostructural {}
    export type Ostructural = {
        readonly 'range': URange
        readonly 'type': mtc.TStructuralTokenType
    }
    
    export namespace Owhitespace__begin {}
    export type Owhitespace__begin = {
        readonly 'location': ULocationInfo
    }
    
    export namespace Owhitespace__end {}
    export type Owhitespace__end = {
        readonly 'location': ULocationInfo
    }
    
    export namespace Owrapped__string__begin {}
    export type Owrapped__string__begin = {
        readonly 'range': URange
        readonly 'type': mtc.TWrappedStringType
    }
    
    export namespace Owrapped__string__end {}
    export type Owrapped__string__end = {
        readonly 'range': URange
    }
}
export type GPretoken = 
    | ['block comment begin', GPretoken.Oblock__comment__begin]
    | ['block comment end', GPretoken.Oblock__comment__end]
    | ['header start', GPretoken.Oheader__start]
    | ['line comment begin', GPretoken.Oline__comment__begin]
    | ['line comment end', GPretoken.Oline__comment__end]
    | ['newline', GPretoken.Onewline]
    | ['non wrapped string begin', GPretoken.Onon__wrapped__string__begin]
    | ['non wrapped string end', GPretoken.Onon__wrapped__string__end]
    | ['snippet', string]
    | ['structural', GPretoken.Ostructural]
    | ['whitespace begin', GPretoken.Owhitespace__begin]
    | ['whitespace end', GPretoken.Owhitespace__end]
    | ['wrapped string begin', GPretoken.Owrapped__string__begin]
    | ['wrapped string end', GPretoken.Owrapped__string__end]
export type UPretoken = GPretoken

export namespace GRange {}
export type GRange = {
    readonly 'length': number
    readonly 'size': URangeSize
    readonly 'start': ULocationInfo
}
export type URange = GRange

export namespace GRangeSize {
    
    export namespace Omultiline {}
    export type Omultiline = {
        readonly 'column': number
        readonly 'line offset': number
    }
    
    export namespace Osinge__line {}
    export type Osinge__line = {
        readonly 'column offset': number
    }
}
export type GRangeSize = 
    | ['multiline', GRangeSize.Omultiline]
    | ['singe line', GRangeSize.Osinge__line]
export type URangeSize = GRangeSize