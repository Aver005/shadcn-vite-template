import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        ignores: ['node_modules', 'dist', 'build', 'coverage'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: 'readonly',
            },
        },
        plugins: {
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            '@typescript-eslint': typescriptEslint,
            'jsx-a11y': eslintPluginJsxA11y,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    eslintConfigPrettier, // Подключаем конфиг Prettier напрямую
];
