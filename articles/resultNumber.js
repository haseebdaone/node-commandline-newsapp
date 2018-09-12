const fs = require('fs');

changeNumber = (number) => {
  fs.writeFile('./articles/number.js', `var number = '${number}'; \n \nmodule.exports = number;`, (err) => {
    if (err) throw err;
    console.log(`Settings changed to displey ${number} articles`);
  });
}

module.exports = changeNumber;
