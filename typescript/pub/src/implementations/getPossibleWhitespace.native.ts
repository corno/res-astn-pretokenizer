
import { A } from "../api.generated"

export const $$: A.getPossibleWhitespace = () => {
    return ($) => {
        switch ($) {
            case 0x09: return [true, ['tab', null]]
            case 0x0A: return [true, ['line feed', null]]
            case 0x0D: return [true, ['carriage return', null]]
            case 0x20: return [true, ['space', null]]
            default: {
                return [false]
            }
        }
    }
}