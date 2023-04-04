
import { A } from "../api.generated"

export const $$: A.getPossibleSymbol = () => {
    return ($) => {
        switch ($) {
            case 0x21: return [true, ['exclamation mark', null]]
            case 0x22: return [true, ['quotation mark', null]]
            case 0x27: return [true, ['apostrophe', null]]
            case 0x28: return [true, ['open parenthesis', null]]
            case 0x29: return [true, ['close parenthesis', null]]
            case 0x2A: return [true, ['asterisk', null]]
            case 0x2C: return [true, ['comma', null]]
            case 0x2F: return [true, ['solidus', null]]
            case 0x3A: return [true, ['colon', null]]
            case 0x3C: return [true, ['open angle bracket', null]]
            case 0x3E: return [true, ['close angle bracket', null]]
            case 0x5B: return [true, ['open bracket', null]]
            case 0x5B: return [true, ['reverse solidus', null]]
            case 0x5D: return [true, ['close bracket', null]]
            case 0x60: return [true, ['backtick', null]]
            case 0x7B: return [true, ['open brace', null]]
            case 0x7C: return [true, ['vertical line', null]]
            case 0x7D: return [true, ['close brace', null]]
            default: {
                return [false]
            }
        }
    }
}