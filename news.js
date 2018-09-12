const yargs = require('yargs');

const countries = require('./countries/countries');
const languages = require('./language/languages');
const countryCode = require('./countries/countryCode');
const changeLanguage = require('./language/changeLanguage');
const getArticles = require('./articles/getArticles');
const categories = require('./categories/categories');
const changeNumber = require('./articles/resultNumber');

var number = require('./articles/number');
var languageName = require('./language/language');

var argv = yargs
  .option('query', {
    alias: 'q',
    describe: 'search on anything'
  })
  .option('country', {
    alias: 'c',
    describe: 'search on any of the following countries',
    choices: countries
  })
  .option('language', {
    alias: 'l',
    describe: 'choose the language you want your results in (only works for query)',
    choices: languages
  })
  .option('category', {
    alias: 'ca',
    describe: 'choose one of the following categories you want news for (to be used with country argument)',
    choices: categories
  })
  .option('resultNumber', {
    alias: 'n',
    describe: 'Change the number of articles you want too see'
  })
  .wrap(yargs.terminalWidth())
  .help()
  .argv;

var url1 = `https://newsapi.org/v2/everything?`;
var url2 = `https://newsapi.org/v2/top-headlines?`;
var language = `&language=${languageName}`;
var url;
var pageSize = `&pageSize=${number}`;

// place apikey in variable below should be something like this &apiKey=814af4x0866g4350b35fe7g609554503
var apikey = 'insert api key here';

if (argv.query) {
  url =  `${url1}q=${encodeURIComponent(argv.query)}${language}${apikey}${pageSize}`;
  getArticles(url);
} else if (argv.category && argv.country) {
  var country = countryCode(argv.country);
  url =  `${url2}category=${argv.category}&country=${country}${apikey}${pageSize}`;
  getArticles(url);
} else if (argv.country) {
  var country = countryCode(argv.country);
  url =  `${url2}country=${country}${language}${apikey}${pageSize}`;
  getArticles(url);
} else if (argv.language) {
  changeLanguage(argv.language);
}  else if (argv.category) {
  console.log(`Please specify a country argument with the following chosen category ${argv.category} to obtain results`);
  console.log(`For example:`);
  console.log(`--ca ${argv.category} -c Australia`);
} else if (argv.resultNumber) {
  changeNumber(argv.resultNumber);
} else {
  console.log('Invalid command entered');
  console.log('Please run the following command for assistance:');
  console.log('node news --help');
}
