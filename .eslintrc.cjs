module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'semi': 2,
        'comma-dangle': 0,
        'no-unused-vars': 2,
        'no-undef': 1,
        'no-unexpected-multiline': 1,
        'no-debugger': 2,
        'no-alert': 1,
        'no-console': 0,
        'no-dupe-args': 2,
        'no-dupe-else-if': 2,
        'no-unreachable': 2,
        'no-await-in-loop': 1,
        'no-return-assign': ['error', 'except-parens'],
        'no-unused-expressions': [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-shadow': 2,
        'quotes': [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'eqeqeq': 1,
        'array-bracket-spacing': 1,
        'camelcase': 1,
        'indent': 2,
        'max-len': [2, { code: 120, tabWidth: 4, ignoreTemplateLiterals: true }],
    },
};
