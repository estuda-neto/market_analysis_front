const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // caminho do projeto
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    // mapeia imports de CSS/imagens para mocks
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
