import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GError {
    
    export namespace Ptype {
        
        export namespace Ofound__dangling__slash__at__the__end__of__the__text {}
        export type Ofound__dangling__slash__at__the__end__of__the__text = {}
        
        export namespace Ounterminated__block__comment {}
        export type Ounterminated__block__comment = {}
        
        export namespace Ounterminated__string {}
        export type Ounterminated__string = {}
    }
    export type Ptype = 
        | ['found dangling slash at the end of the text', Ptype.Ofound__dangling__slash__at__the__end__of__the__text]
        | ['unterminated block comment', Ptype.Ounterminated__block__comment]
        | ['unterminated string', Ptype.Ounterminated__string]
}
export type GError = {
    readonly 'location': ULocationInfo
    readonly 'type': GError.Ptype
}
export type UError = GError

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
    
    export namespace Ptype {
        
        export namespace Oblock__comment__begin {}
        export type Oblock__comment__begin = {}
        
        export namespace Oblock__comment__end {}
        export type Oblock__comment__end = {}
        
        export namespace Oheader__start {}
        export type Oheader__start = {}
        
        export namespace Oline__comment__begin {}
        export type Oline__comment__begin = {}
        
        export namespace Oline__comment__end {}
        export type Oline__comment__end = {}
        
        export namespace Onewline {}
        export type Onewline = {}
        
        export namespace Onon__wrapped__string__begin {}
        export type Onon__wrapped__string__begin = {}
        
        export namespace Onon__wrapped__string__end {}
        export type Onon__wrapped__string__end = {}
        
        export namespace Ostructural {}
        export type Ostructural = {}
        
        export namespace Owhitespace__begin {}
        export type Owhitespace__begin = {}
        
        export namespace Owhitespace__end {}
        export type Owhitespace__end = {}
        
        export namespace Owrapped__string__begin {}
        export type Owrapped__string__begin = {}
        
        export namespace Owrapped__string__end {}
        export type Owrapped__string__end = {}
    }
    export type Ptype = 
        | ['block comment begin', Ptype.Oblock__comment__begin]
        | ['block comment end', Ptype.Oblock__comment__end]
        | ['header start', Ptype.Oheader__start]
        | ['line comment begin', Ptype.Oline__comment__begin]
        | ['line comment end', Ptype.Oline__comment__end]
        | ['newline', Ptype.Onewline]
        | ['non wrapped string begin', Ptype.Onon__wrapped__string__begin]
        | ['non wrapped string end', Ptype.Onon__wrapped__string__end]
        | ['snippet', string]
        | ['structural', Ptype.Ostructural]
        | ['whitespace begin', Ptype.Owhitespace__begin]
        | ['whitespace end', Ptype.Owhitespace__end]
        | ['wrapped string begin', Ptype.Owrapped__string__begin]
        | ['wrapped string end', Ptype.Owrapped__string__end]
}
export type GPretoken = {
    readonly 'location': ULocationInfo
    readonly 'type': GPretoken.Ptype
}
export type UPretoken = GPretoken

export namespace GPretokenizerConfigurationData {
    
    export namespace Pwhitespace {}
    export type Pwhitespace = {
        readonly 'carriage return': number
        readonly 'line feed': number
        readonly 'space': number
        readonly 'tab': number
    }
}
export type GPretokenizerConfigurationData = {
    readonly 'absolutePositionStart': number
    readonly 'firstCharacter': number
    readonly 'firstLine': number
    readonly 'whitespace': GPretokenizerConfigurationData.Pwhitespace
}
export type UPretokenizerConfigurationData = GPretokenizerConfigurationData

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