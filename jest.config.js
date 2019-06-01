module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  testRegex: '(/__tests__/.*|(Test|/))\\.[jt]sx?$',
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: false,
  "collectCoverage": false,
  "collectCoverageFrom": [
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/pages/**/*.vue"
  ]
};