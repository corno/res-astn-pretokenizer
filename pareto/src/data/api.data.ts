import * as pd from 'pareto-core-data'

import { algorithm, sfunction, dependent, data, procedure, constructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getCharacterPositionType": algorithm(sfunction("this", {}, "GetCharacterPositionType")),
        "getStartCharacterType": algorithm(sfunction("this", {}, "GetStartCharacterType")),

        "createStringSplitter": algorithm(constructor("this", {}, "CreateStringSplitter")),
        "createStringFromCharactersBuilder": algorithm(constructor("this", {}, "CreateStringFromCharactersBuilder")),
    }),
}