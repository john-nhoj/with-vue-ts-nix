import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", {
        "after": true,
        "before": false,
      }],
      "indent": ["error", 2],
      "key-spacing": ["error", {
        "afterColon": true,
        "beforeColon": false,
        "mode": "strict",
      }],
      "no-console": "error",
      "no-irregular-whitespace": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0,
      }],
      "no-trailing-spaces": "error",
      "object-curly-newline": ["error", {
        "ExportDeclaration": {
          "minProperties": 2,
          "multiline": true,
        },
        "ImportDeclaration": {
          "minProperties": 2,
          "multiline": true,
        },
        "ObjectExpression": {
          "minProperties": 2,
          "multiline": true,
        },
        "ObjectPattern": {
          "minProperties": 2,
          "multiline": true,
        },
      }],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],
      "semi": ["error", "always"],
      "sort-keys": ["error", "asc", {
        "caseSensitive": true,
        "natural": false,
      }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...pluginVue.configs["flat/recommended"],
];
