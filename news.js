console.log('App has started');
const yargs = require('yargs');
const axios = require('axios');

var argv = yargs.argv;
console.log(argv.query);
var url = `https://newsapi.org/v2/top-headlines?`;
var language = '&language=en';

// var apikey = '&apiKey={api key here}';

if (argv.query) {
  url =  `${url}q=${encodeURIComponent(argv.query)}${language}${apikey}&pageSize=5`;
}

console.log(encodeURIComponent(argv.query));

axios.get(url)
  .then((response) => {
    console.log(url);
    console.log('There are this many articles: ',response.data.articles.length);
    var articles = response.data.articles.forEach((element) => {
      console.log(`Title: ${element.title}`);
      console.log(`Description: ${element.description}`);
      console.log(`Url: ${element.url}`);
      console.log('--------');
    });
  }).catch((error) => {
    console.log(error);
  });
