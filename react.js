module.exports = {
    extends: ["plugin:react/recommended", "plugin:import/react"],
    plugins: ["react-hooks", "import"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    }
};
