module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": ["babel-jest", { configFile: "./babel.jest.config.js" }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy" // se importar CSS nos componentes
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
