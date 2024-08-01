module.exports = {
  displayName: "angular-app",
  preset: "jest-preset-angular",
//   setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/$1",
  },
};
