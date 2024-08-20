module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!axios/)',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
