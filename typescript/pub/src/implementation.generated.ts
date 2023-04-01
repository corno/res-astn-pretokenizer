import { API } from "./api.generated"
import { $$ as icreateCharacterStreamConsumer } from "./implementations/createCharacterStreamConsumer.native"
import { $$ as icreateStringStreamConsumer } from "./implementations/createStringStreamConsumer.native"

export const $r: API = {
    'createCharacterStreamConsumer': icreateCharacterStreamConsumer,
    'createStringStreamConsumer': icreateStringStreamConsumer,
}