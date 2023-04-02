
import { A } from "../api.generated"

export const $$: A.createStringFromCharactersBuilder = ($c) => {
    return {
        'construct': ($is) => {
            let chars: number[] = []
            return {
                'data': ($) => {
                    chars.push($)

                    if ($c["maximum string length"][0]) {
                        if (chars.length === $c["maximum string length"][1]) {
                            $is.handler(String.fromCharCode(...chars))
                            chars = []
                        }
                    }
                },
                'end': () => {
                    $is.handler(String.fromCharCode(...chars))
                },
            }
        }
    }
}