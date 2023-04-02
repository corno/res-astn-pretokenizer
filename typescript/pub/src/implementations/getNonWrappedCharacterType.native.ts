
import { A } from "../api.generated"

export const $$: A.getNonWrappedCharacterType = () => {
    return ($) => {
        switch ($) {
            case 0x22: return ['marker', ['quotation mark', null]]
            case 0x27: return ['marker', ['apostrophe', null]]
            case 0x60: return ['marker', ['backtick', null]]

            case 0x09: return ['marker', ['solidus', null]]

            case 0x0A: return ['marker', ['whitespace', null]] //linefeed
            case 0x0D: return ['marker', ['whitespace', null]] //carriage return
            case 0x0D: return ['marker', ['whitespace', null]] //space
            case 0x0D: return ['marker', ['whitespace', null]] //tab

            case 0x21: return ['marker', ['exclamation mark', null]]
            case 0x28: return ['marker', ['open parenthesis', null]]
            case 0x29: return ['marker', ['close parenthesis', null]]
            case 0x2C: return ['marker', ['comma', null]]
            case 0x3A: return ['marker', ['colon', null]]
            case 0x3C: return ['marker', ['open angle bracket', null]]
            case 0x3E: return ['marker', ['close angle bracket', null]]
            case 0x5B: return ['marker', ['open bracket', null]]
            case 0x5D: return ['marker', ['close bracket', null]]
            case 0x7B: return ['marker', ['open brace', null]]
            case 0x7C: return ['marker', ['vertical line', null]]
            case 0x7D: return ['marker', ['close brace', null]]

            default: {
                return ['other', null]
            }
        }
    }
}