const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:postcss-modules/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "postcss-modules/no-undef-class": "error",
    "postcss-modules/no-unused-class": "warn",
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "@typescript-eslint/no-unused-vars": RULES.ERROR,
    "no-unused-vars": RULES.OFF,
  },
  settings: {
    "postcss-modules": {
      postcssConfigDir: "cwd",
      baseDir: "cwd",
      camelCase: false,
      defaultScope: "local",
      include: "**/*.css",
      exclude: "**/node_modules/**/*",
    },
  },
}
