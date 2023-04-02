
import { A } from "../api.generated"

export const $$: A.getCharacterPositionType = () => {
    return ($) => {
        switch ($) {
            case 0x09: return ['tab', null]
            case 0x0A: return ['line feed', null]
            case 0x0D: return ['carriage return', null]
            default: {
                return ['other', null]
            }
        }
    }
}