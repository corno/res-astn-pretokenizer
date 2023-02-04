import { API } from "./api"
import { $$ as icreatePretokenizer } from "./implementations/createPretokenizer.native"

export const $a: API = {
    'createPretokenizer': icreatePretokenizer,
}