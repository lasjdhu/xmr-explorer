import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  {
    plugins: {
      "@tanstack/query": pluginQuery,
    },
    rules: {
      ...pluginQuery.configs["recommended"].rules,
    },
  },
];

export default eslintConfig;
