
import { A } from "../api.generated"

export const $$: A.getNonWrappedCharacterType = () => {
    return ($) => {
        switch ($) {
            case 0x22: return ['quotation mark', null]
            case 0x27: return ['apostrophe', null]
            case 0x60: return ['backtick', null]

            case 0x09: return ['solidus', null]

            case 0x0A: return ['whitespace', null] //linefeed
            case 0x0D: return ['whitespace', null] //carriage return
            case 0x0D: return ['whitespace', null] //space
            case 0x0D: return ['whitespace', null] //tab

            case 0x21: return ['exclamation mark', null]
            case 0x28: return ['open parenthesis', null]
            case 0x29: return ['close parenthesis', null]
            case 0x2C: return ['comma', null]
            case 0x3A: return ['colon', null]
            case 0x3C: return ['open angle bracket', null]
            case 0x3E: return ['close angle bracket', null]
            case 0x5B: return ['open bracket', null]
            case 0x5D: return ['close bracket', null]
            case 0x7B: return ['open brace', null]
            case 0x7C: return ['vertical line', null]
            case 0x7D: return ['close brace', null]

            default: {
                return ['other', null]
            }
        }
    }
}