// .eslintrc.mjs
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

const cleanGlobals = {};
for (const [key, value] of Object.entries({
  ...globals.browser,
  ...globals.es2021,
})) {
  if (!key.trim || key.trim() === key) {
    cleanGlobals[key] = value;
  } else {
    cleanGlobals[key.trim()] = value;
  }
}

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: cleanGlobals,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    rules: {
      ...prettier.rules,
      "prettier/prettier": "warn",
    },
  },
]);
