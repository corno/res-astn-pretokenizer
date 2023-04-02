import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace CommentCharacter {
        
        export namespace asterisk {}
        
        export type asterisk = null
        
        export namespace illegal {}
        
        export type illegal = null
        
        export namespace solidus {}
        
        export type solidus = null
    }
    
    export type CommentCharacter = 
        | ['asterisk', null]
        | ['illegal', null]
        | ['solidus', null]
    
    export namespace NewlineCharacter {
        
        export namespace carriage__return {}
        
        export type carriage__return = null
        
        export namespace line__feed {}
        
        export type line__feed = null
    }
    
    export type NewlineCharacter = 
        | ['carriage return', null]
        | ['line feed', null]
    
    export namespace NonWrappedCharacterType {
        
        export type marker = T.NonWrappedMarkerType
        
        export namespace other {}
        
        export type other = null
    }
    
    export type NonWrappedCharacterType = 
        | ['marker', T.NonWrappedMarkerType]
        | ['other', null]
    
    export namespace NonWrappedMarkerType {
        
        export namespace apostrophe {}
        
        export type apostrophe = null
        
        export namespace backtick {}
        
        export type backtick = null
        
        export namespace close__angle__bracket {}
        
        export type close__angle__bracket = null
        
        export namespace close__brace {}
        
        export type close__brace = null
        
        export namespace close__bracket {}
        
        export type close__bracket = null
        
        export namespace close__parenthesis {}
        
        export type close__parenthesis = null
        
        export namespace colon {}
        
        export type colon = null
        
        export namespace comma {}
        
        export type comma = null
        
        export namespace exclamation__mark {}
        
        export type exclamation__mark = null
        
        export namespace open__angle__bracket {}
        
        export type open__angle__bracket = null
        
        export namespace open__brace {}
        
        export type open__brace = null
        
        export namespace open__bracket {}
        
        export type open__bracket = null
        
        export namespace open__parenthesis {}
        
        export type open__parenthesis = null
        
        export namespace quotation__mark {}
        
        export type quotation__mark = null
        
        export namespace solidus {}
        
        export type solidus = null
        
        export namespace vertical__line {}
        
        export type vertical__line = null
        
        export namespace whitespace {}
        
        export type whitespace = null
    }
    
    export type NonWrappedMarkerType = 
        | ['apostrophe', null]
        | ['backtick', null]
        | ['close angle bracket', null]
        | ['close brace', null]
        | ['close bracket', null]
        | ['close parenthesis', null]
        | ['colon', null]
        | ['comma', null]
        | ['exclamation mark', null]
        | ['open angle bracket', null]
        | ['open brace', null]
        | ['open bracket', null]
        | ['open parenthesis', null]
        | ['quotation mark', null]
        | ['solidus', null]
        | ['vertical line', null]
        | ['whitespace', null]
    
    export namespace PossibleNewlineCharacter {
        
        export type O = T.NewlineCharacter
    }
    
    export type PossibleNewlineCharacter = [ false ] | [ true, T.NewlineCharacter]
    
    export namespace PossibleSymbol {
        
        export type O = T.SymbolType
    }
    
    export type PossibleSymbol = [ false ] | [ true, T.SymbolType]
    
    export namespace StringWrapCharacter {
        
        export namespace apostrophe {}
        
        export type apostrophe = null
        
        export namespace backtick {}
        
        export type backtick = null
        
        export namespace quotation__mark {}
        
        export type quotation__mark = null
    }
    
    export type StringWrapCharacter = 
        | ['apostrophe', null]
        | ['backtick', null]
        | ['quotation mark', null]
    
    export namespace SymbolType {
        
        export namespace apostrophe {}
        
        export type apostrophe = null
        
        export namespace asterisk {}
        
        export type asterisk = null
        
        export namespace backtick {}
        
        export type backtick = null
        
        export namespace carriage__return {}
        
        export type carriage__return = null
        
        export namespace close__angle__bracket {}
        
        export type close__angle__bracket = null
        
        export namespace close__brace {}
        
        export type close__brace = null
        
        export namespace close__bracket {}
        
        export type close__bracket = null
        
        export namespace close__parenthesis {}
        
        export type close__parenthesis = null
        
        export namespace colon {}
        
        export type colon = null
        
        export namespace comma {}
        
        export type comma = null
        
        export namespace exclamation__mark {}
        
        export type exclamation__mark = null
        
        export namespace line__feed {}
        
        export type line__feed = null
        
        export namespace open__angle__bracket {}
        
        export type open__angle__bracket = null
        
        export namespace open__brace {}
        
        export type open__brace = null
        
        export namespace open__bracket {}
        
        export type open__bracket = null
        
        export namespace open__parenthesis {}
        
        export type open__parenthesis = null
        
        export namespace quotation__mark {}
        
        export type quotation__mark = null
        
        export namespace reverse__solidus {}
        
        export type reverse__solidus = null
        
        export namespace solidus {}
        
        export type solidus = null
        
        export namespace space {}
        
        export type space = null
        
        export namespace tab {}
        
        export type tab = null
        
        export namespace vertical__line {}
        
        export type vertical__line = null
    }
    
    export type SymbolType = 
        | ['apostrophe', null]
        | ['asterisk', null]
        | ['backtick', null]
        | ['carriage return', null]
        | ['close angle bracket', null]
        | ['close brace', null]
        | ['close bracket', null]
        | ['close parenthesis', null]
        | ['colon', null]
        | ['comma', null]
        | ['exclamation mark', null]
        | ['line feed', null]
        | ['open angle bracket', null]
        | ['open brace', null]
        | ['open bracket', null]
        | ['open parenthesis', null]
        | ['quotation mark', null]
        | ['reverse solidus', null]
        | ['solidus', null]
        | ['space', null]
        | ['tab', null]
        | ['vertical line', null]
}