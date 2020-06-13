module.exports = {
  testEnvironment: "node",
  roots: [
    "<rootDir>"
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    'components/*.{ts,tsx}',
    'pages/*.{ts,tsx}',
    'redux/*/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.jest.json"
    }
  },
  // coverageThreshold: {
  //   "global": {
  //     "branches": 80,
  //     "functions": 80,
  //     "lines": 80,
  //     "statements": 80
  //   }
  // }
}