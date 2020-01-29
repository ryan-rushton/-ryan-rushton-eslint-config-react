const react = require("./react");
const prettier = require("./prettier");
const typescript = require("./typescript");

module.exports = {
    extends: [
        ...react.extends,
        ...prettier.extends,
        "prettier/react",
        ...typescript.extends,
        "prettier/@typescript-eslint"
    ],
    plugins: [...react.plugins, ...prettier.plugins, ...typescript.plugins],
    parserOptions: typescript.parserOptions,
    env: react.env,
    settings: { ...react.settings, ...typescript.settings }
};
