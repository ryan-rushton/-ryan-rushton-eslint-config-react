const react = require("./react");
const prettier = require(".prettier");

module.exports = {
    extends: [...react.extends, ...prettier.extends, "prettier/react"],
    plugins: [...react.plugins, ...prettier.plugins],
    parserOptions: react.parserOptions
};
