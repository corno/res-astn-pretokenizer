
import { A } from "../api.generated"

export const $$: A.getCommentCharacter = () => {
    return ($) => {
        switch ($) {
            case 0x2F: return ['solidus', null]
            case 0x2A: return ['asterisk', null]
            default: {
                return ['illegal', null]
            }
        }
    }
}