console.log('App has started');
const yargs = require('yargs');

const countries = require('./countries/countries');
const languages = require('./countries/languages');
const countryCode = require('./countries/countryCode');
const changeLanguage = require('./countries/changeLanguage');
const {getArticles} = require('./getArticles');
const categories = require('./categories');
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
    describe: 'choose the language you want your results in (only works for query)',
    choices: languages
  })
  .option('category', {
    alias: 'ca',
    describe: 'choose one of the following categories you want news for',
    choices: categories
  })
  // .wrap(yargs.terminalWidth())
  .help()
  .argv;

var url1 = `https://newsapi.org/v2/everything?`;
var url2 = `https://newsapi.org/v2/top-headlines?`;
var language = `&language=${languageName}`;
var url;
var apikey = '&apiKey=915a7ab0866e4350b35de7f909568503';

if (argv.query) {
  url =  `${url1}q=${encodeURIComponent(argv.query)}${language}${apikey}&pageSize=5`;
  getArticles(url);
} else if (argv.category && argv.country) {
  var country = countryCode(argv.country);
  url =  `${url2}category=${argv.category}&country=${country}${apikey}&pageSize=5`;
  getArticles(url);
} else if (argv.country) {
  var country = countryCode(argv.country);
  url =  `${url2}country=${country}${language}${apikey}&pageSize=5`;
  getArticles(url);
} else if (argv.language) {
  changeLanguage(argv.language);
}  else if (argv.category) {
  console.log(`Please specify a country argument with the following chosen category ${argv.category} to obtain results`);
  console.log(`For example:`);
  console.log(`--ca science -c Australia`);
}
