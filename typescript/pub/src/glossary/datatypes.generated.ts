import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Character {
        
        export type code = number
        
        export namespace _ltype {
            
            export namespace comment {
                
                export namespace O {
                    
                    export namespace asterisk {}
                    
                    export type asterisk = null
                    
                    export namespace solidus {}
                    
                    export type solidus = null
                }
                
                export type O = 
                    | ['asterisk', null]
                    | ['solidus', null]
            }
            
            export type comment = [ false ] | [ true, 
                | ['asterisk', null]
                | ['solidus', null]
            ]
            
            export namespace structural {
                
                export namespace O {
                    
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
                    
                    export namespace vertical__line {}
                    
                    export type vertical__line = null
                }
                
                export type O = 
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
                    | ['vertical line', null]
            }
            
            export type structural = [ false ] | [ true, 
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
                | ['vertical line', null]
            ]
            
            export namespace unicode {
                
                export namespace O {}
                
                export type O = null
            }
            
            export type unicode = [ false ] | [ true, null]
            
            export namespace whitespace {
                
                export namespace O {
                    
                    export namespace carriage__return {}
                    
                    export type carriage__return = null
                    
                    export namespace line__feed {}
                    
                    export type line__feed = null
                    
                    export namespace space {}
                    
                    export type space = null
                    
                    export namespace tab {}
                    
                    export type tab = null
                }
                
                export type O = 
                    | ['carriage return', null]
                    | ['line feed', null]
                    | ['space', null]
                    | ['tab', null]
            }
            
            export type whitespace = [ false ] | [ true, 
                | ['carriage return', null]
                | ['line feed', null]
                | ['space', null]
                | ['tab', null]
            ]
            
            export namespace wrapped__string {
                
                export namespace O {
                    
                    export namespace apostrophe {}
                    
                    export type apostrophe = null
                    
                    export namespace b {}
                    
                    export type b = null
                    
                    export namespace backtick {}
                    
                    export type backtick = null
                    
                    export namespace f {}
                    
                    export type f = null
                    
                    export namespace n {}
                    
                    export type n = null
                    
                    export namespace question__mark {}
                    
                    export type question__mark = null
                    
                    export namespace r {}
                    
                    export type r = null
                    
                    export namespace reverse__solidus {}
                    
                    export type reverse__solidus = null
                    
                    export namespace solidus {}
                    
                    export type solidus = null
                    
                    export namespace t {}
                    
                    export type t = null
                    
                    export namespace u {}
                    
                    export type u = null
                }
                
                export type O = 
                    | ['apostrophe', null]
                    | ['b', null]
                    | ['backtick', null]
                    | ['f', null]
                    | ['n', null]
                    | ['question mark', null]
                    | ['r', null]
                    | ['reverse solidus', null]
                    | ['solidus', null]
                    | ['t', null]
                    | ['u', null]
            }
            
            export type wrapped__string = [ false ] | [ true, 
                | ['apostrophe', null]
                | ['b', null]
                | ['backtick', null]
                | ['f', null]
                | ['n', null]
                | ['question mark', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
            ]
        }
        
        export type _ltype = {
            readonly 'comment': [ false ] | [ true, 
                | ['asterisk', null]
                | ['solidus', null]
            ]
            readonly 'structural': [ false ] | [ true, 
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
                | ['vertical line', null]
            ]
            readonly 'unicode': [ false ] | [ true, null]
            readonly 'whitespace': [ false ] | [ true, 
                | ['carriage return', null]
                | ['line feed', null]
                | ['space', null]
                | ['tab', null]
            ]
            readonly 'wrapped string': [ false ] | [ true, 
                | ['apostrophe', null]
                | ['b', null]
                | ['backtick', null]
                | ['f', null]
                | ['n', null]
                | ['question mark', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
            ]
        }
    }
    
    export type Character = {
        readonly 'code': number
        readonly 'type': {
            readonly 'comment': [ false ] | [ true, 
                | ['asterisk', null]
                | ['solidus', null]
            ]
            readonly 'structural': [ false ] | [ true, 
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
                | ['vertical line', null]
            ]
            readonly 'unicode': [ false ] | [ true, null]
            readonly 'whitespace': [ false ] | [ true, 
                | ['carriage return', null]
                | ['line feed', null]
                | ['space', null]
                | ['tab', null]
            ]
            readonly 'wrapped string': [ false ] | [ true, 
                | ['apostrophe', null]
                | ['b', null]
                | ['backtick', null]
                | ['f', null]
                | ['n', null]
                | ['question mark', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
            ]
        }
    }
}