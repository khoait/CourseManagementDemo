module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-node",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/Mocks/"],
  coverageReporters: ["cobertura"],
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage" }]],
};
