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
            
            export namespace escape {
                
                export namespace O {
                    
                    export namespace b {}
                    
                    export type b = null
                    
                    export namespace f {}
                    
                    export type f = null
                    
                    export namespace n {}
                    
                    export type n = null
                    
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
                    
                    export type wrapper = T.Wrapper
                }
                
                export type O = 
                    | ['b', null]
                    | ['f', null]
                    | ['n', null]
                    | ['r', null]
                    | ['reverse solidus', null]
                    | ['solidus', null]
                    | ['t', null]
                    | ['u', null]
                    | ['wrapper', T.Wrapper]
            }
            
            export type escape = [ false ] | [ true, 
                | ['b', null]
                | ['f', null]
                | ['n', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
                | ['wrapper', T.Wrapper]
            ]
            
            export namespace nontoken {
                
                export namespace O {
                    
                    export namespace asterisk {}
                    
                    export type asterisk = null
                    
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
                    
                    export type whitespace = T.Whitespace
                    
                    export type wrapper = T.Wrapper
                }
                
                export type O = 
                    | ['asterisk', null]
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
                    | ['whitespace', T.Whitespace]
                    | ['wrapper', T.Wrapper]
            }
            
            export type nontoken = [ false ] | [ true, 
                | ['asterisk', null]
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
                | ['whitespace', T.Whitespace]
                | ['wrapper', T.Wrapper]
            ]
            
            export type unicode = boolean
            
            export namespace whitespace {
                
                export type O = T.Whitespace
            }
            
            export type whitespace = [ false ] | [ true, T.Whitespace]
            
            export namespace wrapped__string {
                
                export namespace O {
                    
                    export namespace reverse__solidus {}
                    
                    export type reverse__solidus = null
                    
                    export type wrapper = T.Wrapper
                }
                
                export type O = 
                    | ['reverse solidus', null]
                    | ['wrapper', T.Wrapper]
            }
            
            export type wrapped__string = [ false ] | [ true, 
                | ['reverse solidus', null]
                | ['wrapper', T.Wrapper]
            ]
        }
        
        export type _ltype = {
            readonly 'comment': [ false ] | [ true, 
                | ['asterisk', null]
                | ['solidus', null]
            ]
            readonly 'escape': [ false ] | [ true, 
                | ['b', null]
                | ['f', null]
                | ['n', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
                | ['wrapper', T.Wrapper]
            ]
            readonly 'nontoken': [ false ] | [ true, 
                | ['asterisk', null]
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
                | ['whitespace', T.Whitespace]
                | ['wrapper', T.Wrapper]
            ]
            readonly 'unicode': boolean
            readonly 'whitespace': [ false ] | [ true, T.Whitespace]
            readonly 'wrapped string': [ false ] | [ true, 
                | ['reverse solidus', null]
                | ['wrapper', T.Wrapper]
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
            readonly 'escape': [ false ] | [ true, 
                | ['b', null]
                | ['f', null]
                | ['n', null]
                | ['r', null]
                | ['reverse solidus', null]
                | ['solidus', null]
                | ['t', null]
                | ['u', null]
                | ['wrapper', T.Wrapper]
            ]
            readonly 'nontoken': [ false ] | [ true, 
                | ['asterisk', null]
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
                | ['whitespace', T.Whitespace]
                | ['wrapper', T.Wrapper]
            ]
            readonly 'unicode': boolean
            readonly 'whitespace': [ false ] | [ true, T.Whitespace]
            readonly 'wrapped string': [ false ] | [ true, 
                | ['reverse solidus', null]
                | ['wrapper', T.Wrapper]
            ]
        }
    }
    
    export namespace Whitespace {
        
        export namespace carriage__return {}
        
        export type carriage__return = null
        
        export namespace line__feed {}
        
        export type line__feed = null
        
        export namespace space {}
        
        export type space = null
        
        export namespace tab {}
        
        export type tab = null
    }
    
    export type Whitespace = 
        | ['carriage return', null]
        | ['line feed', null]
        | ['space', null]
        | ['tab', null]
    
    export namespace Wrapper {
        
        export namespace apostrophe {}
        
        export type apostrophe = null
        
        export namespace backtick {}
        
        export type backtick = null
        
        export namespace quotation__mark {}
        
        export type quotation__mark = null
    }
    
    export type Wrapper = 
        | ['apostrophe', null]
        | ['backtick', null]
        | ['quotation mark', null]
}