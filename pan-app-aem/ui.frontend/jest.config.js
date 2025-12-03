/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  collectCoverageFrom: ["src/main/webpack/components/**/*.{ts,js,jsx,mjs}"],
  clearMocks: true,
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "swiper/css": "swiper/swiper.min.css",
    "@helpers/(.*)": ["<rootDir>/src/main/webpack/helpers/$1"]
  },
  transform: {    "^.+\\.[t|j]sx?$": "ts-jest"  },
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7)"],
  testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ]
};
