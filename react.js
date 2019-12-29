module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:import/react",
        "plugin:jsx-a11y/recommended"
    ],
    plugins: ["react-hooks", "import", "jsx-a11y"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        jest: true
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
