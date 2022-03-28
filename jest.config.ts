import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'html'
    ],
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    transform: {'.+\\.ts$': 'ts-jest'}
  };
};
