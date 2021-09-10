module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  collectCoverageFrom: [
    'components/*.tsx',
    'components/**/*.tsx',
    'redux/*/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/components/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
    '@redux/(.*)': '<rootDir>/redux/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '@api/(.*)': '<rootDir>/api/$1',
    '@i18nnext': '<rootDir>/i18nnext.ts',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
