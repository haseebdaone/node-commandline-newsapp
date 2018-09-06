const iso3311a2 = require('iso-3166-1-alpha-2');
const ISO6391 = require('iso-639-1')

var countriesAlpha2 = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za";

var res = countriesAlpha2.split(" ");
var countries = [];
// retrieve all country names in an array to use in countries.js
outputCountryNames = () => {

  res.forEach((country) => {
      var countryCode = country.toUpperCase();
      var countryNames = String(iso3311a2.getCountry(countryCode));
      countries.push(countryNames);
    });
    return console.log(countries);
}

// retrieve array of languages to use in language.js

 outputCountryLanguages = () => {
   var iso6391 = "ar de en es fr he it nl no pt ru se ud zh";
   var result = iso6391.split(" ");
   var languages = [];

   result.forEach((language) => {
     languages.push(ISO6391.getName(language));
   });
   return console.log(languages);
 }
