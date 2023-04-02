import * as pd from 'pareto-core-data'

import { algorithm, sfunction, dependent, data, procedure, constructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "isTab": algorithm(sfunction("this", {}, "IsTab"), {}, dependent(null, {
            "getPossibleSymbol": sfunction("this", {}, "GetPossibleSymbol")
        }, {})),
        "isHexadecimal": algorithm(sfunction("this", {}, "IsHexadecimal")),
        "getPossibleSymbol": algorithm(sfunction("this", {}, "GetPossibleSymbol")),
        "getNonWrappedCharacterType": algorithm(sfunction("this", {}, "GetNonWrappedCharacterType"), {}, dependent(null, {
            "getPossibleSymbol": sfunction("this", {}, "GetPossibleSymbol")
        }, {})),
        "getCommentCharacter": algorithm(sfunction("this", {}, "GetCommentCharacter"), {}, dependent(null, {
            "getPossibleSymbol": sfunction("this", {}, "GetPossibleSymbol")
        }, {})),
        "getPossibleNewlineCharacter": algorithm(sfunction("this", {}, "GetPossibleNewlineCharacter"), {}, dependent(null, {
            "getPossibleSymbol": sfunction("this", {}, "GetPossibleSymbol")
        }, {})),

        "createStringSplitter": algorithm(constructor("this", {}, "CreateStringSplitter")),
        "createStringFromCharactersBuilder": algorithm(constructor("this", {}, "CreateStringFromCharactersBuilder")),
    }),
}