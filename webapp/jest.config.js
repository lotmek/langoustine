
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "babel-jest",
    ],
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/util/mockSvg.js"
  }
};
