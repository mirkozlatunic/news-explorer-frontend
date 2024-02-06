module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, //For module.exports here and process.env.NODE_ENV in react code
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-console": "off",
    "no-unused-vars": "off",
    "spaced-comment": ["error", "never"],
    "arrow-body-style": "off",
  },
};
