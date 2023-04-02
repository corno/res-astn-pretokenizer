import { API } from "./api.generated"
import { $$ as icreateStringFromCharactersBuilder } from "./implementations/createStringFromCharactersBuilder.native"
import { $$ as icreateStringSplitter } from "./implementations/createStringSplitter.native"
import { $$ as igetCharacterPositionType } from "./implementations/getCharacterPositionType.native"
import { $$ as igetCommentCharacter } from "./implementations/getCommentCharacter.native"
import { $$ as igetNonWrappedCharacterType } from "./implementations/getNonWrappedCharacterType.native"
import { $$ as iisAsterisk } from "./implementations/isAsterisk.native"
import { $$ as iisHexadecimal } from "./implementations/isHexadecimal.native"

export const $r: API = {
    'createStringFromCharactersBuilder': icreateStringFromCharactersBuilder,
    'createStringSplitter': icreateStringSplitter,
    'getCharacterPositionType': igetCharacterPositionType,
    'getCommentCharacter': igetCommentCharacter,
    'getNonWrappedCharacterType': igetNonWrappedCharacterType,
    'isAsterisk': iisAsterisk,
    'isHexadecimal': iisHexadecimal,
}