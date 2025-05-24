import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['**/build/**', '**/dist/**','**/*.config.js', '**/*.config.mjs', '**/*.cjs'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked[0].rules,
      'no-console': 'error',
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
];