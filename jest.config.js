module.exports = {
    testMatch: [
        "<rootDir>/**/*.test.(js|ts)",
        "<rootDir>/(**/tests/**/*.spec.(js|ts)|**/__tests__/*.(js|ts))",
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
    ],
}