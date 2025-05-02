// karma.conf.js
process.env.CHROME_BIN = require('puppeteer').executablePath()
// process.env.CHROME_BIN = require('karma-chrome-launcher').executablePath
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false
  })
}