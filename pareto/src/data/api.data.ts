import * as pd from 'pareto-core-data'

import { algorithm, sfunction, dependent, data, procedure, constructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "isAsterisk": algorithm(sfunction("this", {}, "IsAsterisk")),
        "isHexadecimal": algorithm(sfunction("this", {}, "IsHexadecimal")),
        "getCharacterPositionType": algorithm(sfunction("this", {}, "GetCharacterPositionType")),
        "getNonWrappedCharacterType": algorithm(sfunction("this", {}, "GetNonWrappedCharacterType")),
        "getCommentCharacter": algorithm(sfunction("this", {}, "GetCommentCharacter")),
        "getPossibleNewlineCharacter": algorithm(sfunction("this", {}, "GetPossibleNewlineCharacter")),

        "createStringSplitter": algorithm(constructor("this", {}, "CreateStringSplitter")),
        "createStringFromCharactersBuilder": algorithm(constructor("this", {}, "CreateStringFromCharactersBuilder")),
    }),
}