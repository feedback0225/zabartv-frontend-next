module.exports = {
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {

      "^@/components(.*)$": "<rootDir>/src/components/$1",

      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  
      "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  
      "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
        "<rootDir>/__mocks__/fileMock.js",
    },
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/.next/",
      "<rootDir>/e2e/",
    ],
    testEnvironment: "jsdom",
    transform: {
      /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };