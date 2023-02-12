import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export type location = T.LocationInfo
        
        export namespace _ltype {
            
            export namespace found__dangling__slash__at__the__end__of__the__text {}
            
            export type found__dangling__slash__at__the__end__of__the__text = {}
            
            export namespace unterminated__block__comment {}
            
            export type unterminated__block__comment = {}
            
            export namespace unterminated__string {}
            
            export type unterminated__string = {}
        }
        
        export type _ltype = 
            | ['found dangling slash at the end of the text', {}]
            | ['unterminated block comment', {}]
            | ['unterminated string', {}]
    }
    
    export type Error = {
        readonly 'location': T.LocationInfo
        readonly 'type': 
            | ['found dangling slash at the end of the text', {}]
            | ['unterminated block comment', {}]
            | ['unterminated string', {}]
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
            
            export type block__comment__begin = {}
            
            export namespace block__comment__end {}
            
            export type block__comment__end = {}
            
            export namespace header__start {}
            
            export type header__start = {}
            
            export namespace line__comment__begin {}
            
            export type line__comment__begin = {}
            
            export namespace line__comment__end {}
            
            export type line__comment__end = {}
            
            export namespace newline {}
            
            export type newline = {}
            
            export namespace non__wrapped__string__begin {}
            
            export type non__wrapped__string__begin = {}
            
            export namespace non__wrapped__string__end {}
            
            export type non__wrapped__string__end = {}
            
            export type snippet = string
            
            export namespace structural {}
            
            export type structural = {}
            
            export namespace whitespace__begin {}
            
            export type whitespace__begin = {}
            
            export namespace whitespace__end {}
            
            export type whitespace__end = {}
            
            export namespace wrapped__string__begin {}
            
            export type wrapped__string__begin = {}
            
            export namespace wrapped__string__end {}
            
            export type wrapped__string__end = {}
        }
        
        export type _ltype = 
            | ['block comment begin', {}]
            | ['block comment end', {}]
            | ['header start', {}]
            | ['line comment begin', {}]
            | ['line comment end', {}]
            | ['newline', {}]
            | ['non wrapped string begin', {}]
            | ['non wrapped string end', {}]
            | ['snippet', string]
            | ['structural', {}]
            | ['whitespace begin', {}]
            | ['whitespace end', {}]
            | ['wrapped string begin', {}]
            | ['wrapped string end', {}]
    }
    
    export type Pretoken = {
        readonly 'location': T.LocationInfo
        readonly 'type': 
            | ['block comment begin', {}]
            | ['block comment end', {}]
            | ['header start', {}]
            | ['line comment begin', {}]
            | ['line comment end', {}]
            | ['newline', {}]
            | ['non wrapped string begin', {}]
            | ['non wrapped string end', {}]
            | ['snippet', string]
            | ['structural', {}]
            | ['whitespace begin', {}]
            | ['whitespace end', {}]
            | ['wrapped string begin', {}]
            | ['wrapped string end', {}]
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