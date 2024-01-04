module.exports = {
  extends: "airbnb-base",
  plugins: ["import"],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
