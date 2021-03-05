const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    );
    return config;
  },
  pageExtensions: ["page.tsx"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};
