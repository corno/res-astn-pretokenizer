import * as pd from 'pareto-core-data'

import { algorithm, sfunction, dependent, data, procedure } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createPretokenizer": algorithm(sfunction("this", {}, "Pretokenize"), {}, dependent(data("this", {}, "PretokenizerConfigurationData"), {
            "onError": procedure("this", {}, "OnError"),
        }, {
            
        })),
    }),
}