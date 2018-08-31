const iso3311a2 = require('iso-3166-1-alpha-2');

countryCode = (country) => {
  var code = iso3311a2.getCode(country).toLowerCase();
  return code;
};

module.exports = countryCode;
