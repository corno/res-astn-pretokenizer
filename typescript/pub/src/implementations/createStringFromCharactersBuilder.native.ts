
import { A } from "../api.generated"

export const $$: A.createStringFromCharactersBuilder = ($c) => {
    return {
        'construct': ($is) => {
            let chars: number[] = []
            function flush() {

                $is.handler.data(String.fromCharCode(...chars))
                chars = []
            }
            return {
                'data': ($) => {
                    chars.push($)

                    if ($c["maximum string length"][0]) {
                        if (chars.length === $c["maximum string length"][1]) {
                            flush()
                        }
                    }
                },
                'end': () => {
                    flush()
                    $is.handler.end()
                },
            }
        }
    }
}