const { shellCommand } = require('cerebro-tools')
const { settings } = require('./shorthand')

const fn = ({ term, display }) => {
  // Put your plugin code here

  const zealCommand = term => {
    const splitWords = term.split(' ')
    if (splitWords.length > 1) {
      const lang = checkLangShorthand(splitWords[0]);
      const searchTerm = splitWords.slice(1).join(' ');
      shellCommand(`zeal ${lang}:${searchTerm}`);
    } else {
      shellCommand(`zeal ${term}`);
    }
  }
 
  // proof of concept hardcoding now ...
  const checkLangShorthand = lang => {
    if(lang == "js"){
      return "javascript"
    }
    return lang;
  }

  display({
    title: `Search for ${term} on Zeal`,
    onSelect: function () {
      zealCommand(term)
    }
  })
}

module.exports = {
  fn: fn,
  keyword: 'zeal',
  settings: settings
}