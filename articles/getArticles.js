const axios = require('axios');

getArticles = (url) => {

  return axios.get(url)
    .then((response) => {
      console.log('Number of articles displayed:', response.data.articles.length);
      console.log('--------------');
      var articles = response.data.articles.forEach((element) => {
        console.log(`Title: ${element.title}`);
        console.log(`Description: ${element.description}`);
        console.log(`Url: ${element.url}`);
        console.log('--------------');
      });
    }).catch((error) => {
      console.log(error.message);
      console.log(error.response.data.message);
    });
};

module.exports = getArticles;
