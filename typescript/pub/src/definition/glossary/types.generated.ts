import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export type location = T.LocationInfo
        
        export namespace _ltype {
            
            export namespace found__dangling__slash__at__the__end__of__the__text {}
            
            export type found__dangling__slash__at__the__end__of__the__text = null
            
            export namespace unterminated__block__comment {}
            
            export type unterminated__block__comment = null
            
            export namespace unterminated__string {}
            
            export type unterminated__string = null
        }
        
        export type _ltype = 
            | ['found dangling slash at the end of the text', null]
            | ['unterminated block comment', null]
            | ['unterminated string', null]
    }
    
    export type Error = {
        readonly 'location': T.LocationInfo
        readonly 'type': 
            | ['found dangling slash at the end of the text', null]
            | ['unterminated block comment', null]
            | ['unterminated string', null]
    }
    
    export namespace LineLocation {
        
        export type character = number
        
        export type line = number
    }
    
    export type LineLocation = {
        readonly 'character': number
        readonly 'line': number
    }
    
    export namespace LocationInfo {
        
        export type absolutePosition = number
        
        export type lineLocation = T.LineLocation
    }
    
    export type LocationInfo = {
        readonly 'absolutePosition': number
        readonly 'lineLocation': T.LineLocation
    }
    
    export namespace Pretoken {
        
        export type location = T.LocationInfo
        
        export namespace _ltype {
            
            export namespace block__comment__begin {}
            
            export type block__comment__begin = null
            
            export namespace block__comment__end {}
            
            export type block__comment__end = null
            
            export namespace header__start {}
            
            export type header__start = null
            
            export namespace line__comment__begin {}
            
            export type line__comment__begin = null
            
            export namespace line__comment__end {}
            
            export type line__comment__end = null
            
            export namespace newline {}
            
            export type newline = null
            
            export namespace non__wrapped__string__begin {}
            
            export type non__wrapped__string__begin = null
            
            export namespace non__wrapped__string__end {}
            
            export type non__wrapped__string__end = null
            
            export type snippet = string
            
            export namespace structural {}
            
            export type structural = null
            
            export namespace whitespace__begin {}
            
            export type whitespace__begin = null
            
            export namespace whitespace__end {}
            
            export type whitespace__end = null
            
            export namespace wrapped__string__begin {}
            
            export type wrapped__string__begin = null
            
            export namespace wrapped__string__end {}
            
            export type wrapped__string__end = null
        }
        
        export type _ltype = 
            | ['block comment begin', null]
            | ['block comment end', null]
            | ['header start', null]
            | ['line comment begin', null]
            | ['line comment end', null]
            | ['newline', null]
            | ['non wrapped string begin', null]
            | ['non wrapped string end', null]
            | ['snippet', string]
            | ['structural', null]
            | ['whitespace begin', null]
            | ['whitespace end', null]
            | ['wrapped string begin', null]
            | ['wrapped string end', null]
    }
    
    export type Pretoken = {
        readonly 'location': T.LocationInfo
        readonly 'type': 
            | ['block comment begin', null]
            | ['block comment end', null]
            | ['header start', null]
            | ['line comment begin', null]
            | ['line comment end', null]
            | ['newline', null]
            | ['non wrapped string begin', null]
            | ['non wrapped string end', null]
            | ['snippet', string]
            | ['structural', null]
            | ['whitespace begin', null]
            | ['whitespace end', null]
            | ['wrapped string begin', null]
            | ['wrapped string end', null]
    }
    
    export namespace PretokenizerConfigurationData {
        
        export type absolutePositionStart = number
        
        export type firstCharacter = number
        
        export type firstLine = number
        
        export namespace whitespace {
            
            export type carriage__return = number
            
            export type line__feed = number
            
            export type space = number
            
            export type tab = number
        }
        
        export type whitespace = {
            readonly 'carriage return': number
            readonly 'line feed': number
            readonly 'space': number
            readonly 'tab': number
        }
    }
    
    export type PretokenizerConfigurationData = {
        readonly 'absolutePositionStart': number
        readonly 'firstCharacter': number
        readonly 'firstLine': number
        readonly 'whitespace': {
            readonly 'carriage return': number
            readonly 'line feed': number
            readonly 'space': number
            readonly 'tab': number
        }
    }
    
    export namespace Range {
        
        export type length = number
        
        export type size = T.RangeSize
        
        export type start = T.LocationInfo
    }
    
    export type Range = {
        readonly 'length': number
        readonly 'size': T.RangeSize
        readonly 'start': T.LocationInfo
    }
    
    export namespace RangeSize {
        
        export namespace multiline {
            
            export type column = number
            
            export type line__offset = number
        }
        
        export type multiline = {
            readonly 'column': number
            readonly 'line offset': number
        }
        
        export namespace singe__line {
            
            export type column__offset = number
        }
        
        export type singe__line = {
            readonly 'column offset': number
        }
    }
    
    export type RangeSize = 
        | ['multiline', {
            readonly 'column': number
            readonly 'line offset': number
        }]
        | ['singe line', {
            readonly 'column offset': number
        }]
}