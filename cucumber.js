module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    paths: ['src/features/**/*.feature'],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
