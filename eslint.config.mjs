// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import prettierPlugin from 'eslint-plugin-prettier';
// import prettierConfig from 'eslint-config-prettier';

// export default [
//     {
//         files: ['**/*.ts'],
//         ignores: [
//             '**/build/**',
//             '**/dist/**',
//             '**/*.config.js',
//             '**/*.config.mjs',
//             '**/*.cjs',
//             '**/*.yml',
//             '**/*.json',
//             '**/*.md'
//         ],
//         languageOptions: {
//             parser: tseslint.parser,
//             parserOptions: {
//                 projectService: true,
//                 tsconfigRootDir: import.meta.dirname,
//                 allowDefaultProject: true
//             }
//         },
//         plugins: {
//             '@typescript-eslint': tseslint.plugin,
//             prettier: prettierPlugin
//         },
//         rules: {
//             ...eslint.configs.recommended.rules,
//             ...tseslint.configs.recommendedTypeChecked[0].rules,
//             'no-console': 'error',
//             'no-useless-catch': 0,
//             quotes: ['error', 'single', { allowTemplateLiterals: true }]
//         }
//     },
//     prettierConfig
// ];

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.ts'],
        ignores: [
            '**/build/**',
            '**/dist/**',
            '**/*.config.js',
            '**/*.config.mjs',
            '**/*.cjs',
            '**/*.yml',
            '**/*.json',
            '**/*.md'
        ],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: new URL('.', import.meta.url).pathname,
                allowDefaultProject: true
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier: prettierPlugin
        },
        rules: {
            ...eslint.configs.recommended.rules,
            ...tseslint.configs.recommendedTypeChecked[0].rules,
            'no-console': 'error',
            'no-useless-catch': 'off',
            quotes: ['error', 'single', { allowTemplateLiterals: true }],
            'prettier/prettier': 'error'
        }
    },
    prettierConfig
];
