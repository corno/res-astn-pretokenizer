import { API } from "./api.generated"
import { $$ as icreateStringFromCharactersBuilder } from "./implementations/createStringFromCharactersBuilder.native"
import { $$ as icreateStringSplitter } from "./implementations/createStringSplitter.native"
import { $$ as igetPossibleSymbol } from "./implementations/getPossibleSymbol.native"
import { $$ as igetPossibleWhitespace } from "./implementations/getPossibleWhitespace.native"
import { $$ as iisHexadecimal } from "./implementations/isHexadecimalCharacter.native"

export const $api: API = {
    'createStringFromCharactersBuilder': icreateStringFromCharactersBuilder,
    'createStringSplitter': icreateStringSplitter,
    'getPossibleSymbol': igetPossibleSymbol,
    'getPossibleWhitespace': igetPossibleWhitespace,
    'isHexadecimal': iisHexadecimal,
}