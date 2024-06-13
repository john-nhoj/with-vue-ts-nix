import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "no-multi-spaces": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-irregular-whitespace": "error",
      "no-console": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...pluginVue.configs["flat/recommended"],
];
