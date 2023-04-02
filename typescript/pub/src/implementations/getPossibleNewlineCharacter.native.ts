
import { A } from "../api.generated"

export const $$: A.getPossibleNewlineCharacter = () => {
    return ($) => {
        switch ($) {
            case 0x0D: return [true, ['carriage return', null]]
            case 0x0A: return [true, ['line feed', null]]
            default: {
                return [false]
            }
        }
    }
}