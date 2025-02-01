module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});
