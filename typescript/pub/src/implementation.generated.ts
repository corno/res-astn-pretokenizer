import { API } from "./api.generated"
import { $$ as icreateStringFromCharactersBuilder } from "./implementations/createStringFromCharactersBuilder.native"
import { $$ as icreateStringSplitter } from "./implementations/createStringSplitter.native"
import { $$ as igetPossibleSymbol } from "./implementations/getPossibleSymbol.native"
import { $$ as iisHexadecimal } from "./implementations/isHexadecimal.native"

export const $r: API = {
    'createStringFromCharactersBuilder': icreateStringFromCharactersBuilder,
    'createStringSplitter': icreateStringSplitter,
    'getPossibleSymbol': igetPossibleSymbol,
    'isHexadecimal': iisHexadecimal,
}