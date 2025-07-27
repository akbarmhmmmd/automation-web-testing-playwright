module.exports = {
  default: [
    '--require tests/steps/**/*.js',
    '--require tests/support/**/*.js',
    '--format progress'
  ].join(' ')
};
