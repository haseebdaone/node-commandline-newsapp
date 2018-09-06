const fs = require('fs');
const ISO6391 = require('iso-639-1');

changeLanguage = (language) => {
  var code = ISO6391.getCode(language);
  fs.writeFile('./countries/language.js', `var language = '${code}'; \n \n module.exports = language;`, (err) => {
    if (err) throw err;
    console.log(`The language has been changed to ${language}`);
  });
}

module.exports = changeLanguage;
