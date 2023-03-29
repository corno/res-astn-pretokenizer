import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "lowlevel ASTN Tokenizer",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        //"glo-astn-tokenconsumer": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                    //"tc": "glo-astn-tokenconsumer",
                }),
            },
            'api': {
                'root': api,
                'imports': d({
                    //"common": "glo-pareto-common",
                    "this": this_(),
                }),
            }
        },
        'temp': {
            'nativeDependencies': d({}),
            'devDependencies': d({
            }),
        },
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        }
    }],
}