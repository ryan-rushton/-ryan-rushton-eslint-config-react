module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["import"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx"]
            }
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    rules: {}
};
