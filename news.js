console.log('App has started');
const yargs = require('yargs');
const axios = require('axios');

const countries = require('./countries/countries');
const languages = require('./countries/languages');
const countryCode = require('./countries/countryCode');
const changeLanguage = require('./countries/changeLanguage');
var languageName = require('./countries/language');


var argv = yargs
  .option('query', {
    alias: 'q',
    describe: 'search on any topic'
  })
  .option('country', {
    alias: 'c',
    describe: 'search on any of the following countries',
    choices: countries
  })
  .option('language', {
    alias: 'l',
    describe: 'choose the language you want your results in',
    choices: languages
  })
  .help()
  .argv;

var url = `https://newsapi.org/v2/everything?`;
var language = `&language=${languageName}`;

var apikey = '&apiKey=915a7ab0866e4350b35de7f909568503';

if (argv.query) {
  url =  `${url}q=${encodeURIComponent(argv.query)}${language}${apikey}&pageSize=5`;
} else if (argv.country) {
  var country = countryCode(argv.country);
  url =  `${url}country=${country}${language}${apikey}&pageSize=5`;
} else if (argv.language) {
  changeLanguage(argv.language);
}

// axios.get(url)
//   .then((response) => {
//     console.log(url);
//     console.log('There are this many articles: ', response.data.articles.length);
//     var articles = response.data.articles.forEach((element) => {
//       console.log(`Title: ${element.title}`);
//       console.log(`Description: ${element.description}`);
//       console.log(`Url: ${element.url}`);
//       console.log('--------');
//     });
//   }).catch((error) => {
//     console.log(error);
//   });
