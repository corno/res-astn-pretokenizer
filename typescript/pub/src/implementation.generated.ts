import { API } from "./api.generated"
import { $$ as icreateStringFromCharactersBuilder } from "./implementations/createStringFromCharactersBuilder.native"
import { $$ as icreateStringSplitter } from "./implementations/createStringSplitter.native"
import { $$ as igetCommentCharacter } from "./implementations/getCommentCharacter.native"
import { $$ as igetNonWrappedCharacterType } from "./implementations/getNonWrappedCharacterType.native"
import { $$ as igetPossibleNewlineCharacter } from "./implementations/getPossibleNewlineCharacter.native"
import { $$ as igetPossibleSymbol } from "./implementations/getPossibleSymbol.native"
import { $$ as iisHexadecimal } from "./implementations/isHexadecimal.native"
import { $$ as iisTab } from "./implementations/isTab.native"

export const $r: API = {
    'createStringFromCharactersBuilder': icreateStringFromCharactersBuilder,
    'createStringSplitter': icreateStringSplitter,
    'getCommentCharacter': igetCommentCharacter,
    'getNonWrappedCharacterType': igetNonWrappedCharacterType,
    'getPossibleNewlineCharacter': igetPossibleNewlineCharacter,
    'getPossibleSymbol': igetPossibleSymbol,
    'isHexadecimal': iisHexadecimal,
    'isTab': iisTab,
}