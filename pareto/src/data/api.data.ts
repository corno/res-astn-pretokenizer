import * as pd from 'pareto-core-data'

import { algorithm, sfunction, dependent, data, procedure, constructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "isHexadecimal": algorithm(sfunction("this", {}, "IsHexadecimal")),
        "getPossibleSymbol": algorithm(sfunction("this", {}, "GetPossibleSymbol")),
        "createStringSplitter": algorithm(constructor("this", {}, "CreateStringSplitter")),
        "createStringFromCharactersBuilder": algorithm(constructor("this", {}, "CreateStringFromCharactersBuilder"), {}, dependent(data("this", {}, "StringBuilderConfiguration"), {}, {})),
    }),
}