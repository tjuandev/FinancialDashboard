/* eslint-disable */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  coveragePathIgnorePatterns: [
    'src/pages/_app.tsx',
    'src/pages/_document.tsx',
    'src/styles/',
    'src/helpers/',
    'src/assets/',
    'src/components/atoms/index.ts',
    'src/components/atoms/Icon/icons/',
    'src/components/molecules/index.ts',
    'src/components/organisms/index.ts',
    'src/components/templates/index.ts',
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/hooks/index.ts',
    'src/providers/',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$'
}
