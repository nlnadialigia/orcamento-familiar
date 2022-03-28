import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'html'
    ],
    globalTeardown: "<rootDir>/test-teardown-globals.ts",
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    transform: {'.+\\.ts$': 'ts-jest'}
  };
};
