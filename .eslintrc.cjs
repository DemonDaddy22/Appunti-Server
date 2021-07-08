module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        requireConfigFile: false,
    },
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 2,
        semi: 2,
        'comma-dangle': 0,
        'no-unused-vars': 1,
        'no-undef': 1,
        'no-unexpected-multiline': 1,
        'no-debugger': 2,
        'no-alert': 1,
        'no-console': 1,
        'no-await-in-loop': 1,
        'no-return-assign': ['error', 'except-parens'],
        'no-unused-expressions': [2, { allowTaggedTemplates: true }],
        'import/prefer-default-export': 0,
        import: 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        eqeqeq: 1,
        'array-bracket-spacing': 1,
        'object-curly-spacing': [1, 'always'],
        'object-curly-newline': [
            1,
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 3,
                    consistent: false,
                },
            },
        ],
        camelcase: 1,
        indent: 2,
        'max-len': [
            2,
            {
                code: 120,
                tabWidth: 4,
                ignoreTemplateLiterals: true,
            },
        ],
        'arrow-spacing': [2, { before: true, after: true }],
        'comma-spacing': [2, { before: false, after: true }],
    },
};
