import jsLint from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginUnused from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsLint from 'typescript-eslint';

const EXTERNAL_LIBS = [
    'react',
    'effector',
    'effector-react',
    'effector-storage',
    'patronum',
    'react-hook-form',
];

export default [
    ...tsLint.configs.recommended,
    jsLint.configs.recommended,
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            'jsxA11y': jsxA11y,
            'unused-imports': pluginUnused,
        },
        settings: {
            'import/resolver': {
                typescript: true,
            },
            'react': {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
                React: true,
                JSX: true,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-console': [
                'error',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-closing-bracket-location': 'off',
            'react/no-unstable-nested-components': 'off',
            'react/jsx-no-undef': 'off',
            'react/function-component-definition': 'off',
            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                },
            ],
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    multiline: 'last',
                },
            ],
            'newline-before-return': 'error',
            'no-prototype-builtins': 'error',
            'max-lines': [1, 300],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/ban-ts-comment': [
                'warn',
                {
                    'minimumDescriptionLength': 5,
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': true,
                    'ts-nocheck': 'allow-with-description',
                },
            ],
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'import/no-duplicates': 'warn',
            'import/prefer-default-export': 'off',
            'import/no-default-export': 'error',
            'import/no-absolute-path': 'error',
            'import/no-cycle': 'error',
            'import/no-self-import': 'error',
            'import/no-named-as-default': 'error',
            'import/no-internal-modules': 'off',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                    optionalDependencies: false,
                    peerDependencies: false,
                },
            ],
            'import/order': [
                'error',
                {
                    'pathGroups': [
                        ...EXTERNAL_LIBS.map((lib) => ({
                            pattern: `${lib}**`,
                            group: 'external',
                            position: 'before',
                        })),
                        {
                            pattern: './**/*.css',
                            group: 'sibling',
                            position: 'after',
                        },
                    ],
                    'newlines-between': 'always',
                    'pathGroupsExcludedImportTypes': ['builtin'],
                    'distinctGroup': true,
                    'alphabetize': {
                        order: 'asc',
                        orderImportKind: 'asc',
                    },
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                },
            ],
        },
    },
    {
        files: ['**/*.d.ts', '**/index.{js,ts}', '**/*.config.{js,ts}', '**/pages/*.tsx'],
        rules: {
            'import/no-named-as-default-member': 'off',
            'import/no-default-export': 'off',
            'import/no-internal-modules': 'off',
            'import/no-unresolved': 'off',
        },
    },
    {
        ignores: ['node_modules/*', 'dist', '.astro', '.turbo', '.husky', '**/*.css'],
    },
];
