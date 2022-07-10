/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: ['default', 'jest-junit'],
  rootDir: './tests',
  testSequencer: './assets/sequencer.js',
  testRegex: './*\\.test\\.ts$',
  testTimeout: 30000,
  maxWorkers: 1,
};
