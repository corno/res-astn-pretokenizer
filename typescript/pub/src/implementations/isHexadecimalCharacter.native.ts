
import { A } from "../api.generated"

export const $$: A.isHexadecimalCharacter = () => {
    return ($) => {
        if ($ >= 0x30 && $ <= 0x39) { // 0-9
            return true
        }
        if ($ >= 0x41 && $ <= 0x46) { // A-F
            return true
        }
        if ($ >= 0x61 && $ <= 0x66) { // a-f
            return true
        }
        return false
    }
}