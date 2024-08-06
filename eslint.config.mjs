import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    ignores: [
      "node_modules/", // unignore `node_modules/` directory
      "node_modules/*", // ignore its content
      "src/**/*", // unignore `node_modules/mylibrary` directory
    ],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
