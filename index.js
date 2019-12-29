module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: ["import"],
    rules: {}
};
