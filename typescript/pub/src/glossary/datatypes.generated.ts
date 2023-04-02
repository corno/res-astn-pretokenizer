import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace CharacterPositionType {
        
        export namespace carriage__return {}
        
        export type carriage__return = null
        
        export namespace line__feed {}
        
        export type line__feed = null
        
        export namespace other {}
        
        export type other = null
        
        export namespace tab {}
        
        export type tab = null
    }
    
    export type CharacterPositionType = 
        | ['carriage return', null]
        | ['line feed', null]
        | ['other', null]
        | ['tab', null]
    
    export namespace PossibleStartCharacter {
        
        export type O = T.StartCharacter
    }
    
    export type PossibleStartCharacter = [ false ] | [ true, T.StartCharacter]
    
    export namespace PossibleWhitespaceCharacter {
        
        export type O = T.WhitespaceCharacter
    }
    
    export type PossibleWhitespaceCharacter = [ false ] | [ true, T.WhitespaceCharacter]
    
    export namespace StartCharacter {
        
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
        
        export namespace solidus {}
        
        export type solidus = null
        
        export namespace vertical__line {}
        
        export type vertical__line = null
        
        export type whitespace = T.WhitespaceCharacter
        
        export type wrapper = T.StringWrapCharacter
    }
    
    export type StartCharacter = 
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
        | ['solidus', null]
        | ['vertical line', null]
        | ['whitespace', T.WhitespaceCharacter]
        | ['wrapper', T.StringWrapCharacter]
    
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
    
    export namespace WhitespaceCharacter {
        
        export namespace space {}
        
        export type space = null
        
        export namespace tab {}
        
        export type tab = null
    }
    
    export type WhitespaceCharacter = 
        | ['space', null]
        | ['tab', null]
}