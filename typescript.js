module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript"
    ],
    rules: {
        "@typescript-eslint/typedef": [
            "error",
            {
                arrowParameter: true,
                memberVariableDeclaration: false,
                parameter: true,
                propertyDeclaration: true
            }
        ]
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".ts",
                    ".jsx",
                    ".tsx",
                    ".json",
                    ".module.scss$"
                ]
            }
        },
        "import/extensions": [".js", ".ts", ".jsx", ".tsx", ".module.scss$"]
    }
};
