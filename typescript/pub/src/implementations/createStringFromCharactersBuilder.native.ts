
import { A } from "../api.generated"

export const $$: A.createStringFromCharactersBuilder = () => {
    return {
        'construct': ($is) => {
            const chars: number[] = []
            return {
                'data': ($) => {
                    chars.push($)
                },
                'end': () => {
                    $is.handler(String.fromCharCode(...chars))
                },
            }
        }
    }
}