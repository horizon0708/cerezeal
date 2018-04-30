const { shellCommand } = require('cerebro-tools')
const { options } = require('./shorthand')


const fn = ({ term, display, settings }) => {
  // Put your plugin code here

  const zealCommand = term => {
    const splitWords = term.split(' ')
    if (splitWords.length > 1) {
      const lang = checkLangShorthand(splitWords[0])
      const searchTerm = splitWords.slice(1).join(' ')
      shellCommand(`zeal ${lang}:${searchTerm}`)
    } else {
      shellCommand(`zeal ${term}`)
    }
  }

  // proof of concept hardcoding now ...
  const checkLangShorthand = lang => {
    if (lang == 'js') {
      return 'javascript'
    }
    return lang
  }
  
  if (settings.keyword.length > 0) {
    let regex = new RegExp("\^"+settings.keyword+"\?\\s\(\.\+\)\$")
    let match = term.match(regex);
    if (match) {
      const searchTerm = match[1]
      display({
        title: `Search for ${searchTerm} on Zeal`,

        onSelect: function () {
          zealCommand(searchTerm)
        }
      })
    }
  } else {
    display({
      title: `Search for ${term} on Zeal`,
      onSelect: function () {
        zealCommand(term)
      }
    })
  }
}

module.exports = {
  fn,
  keyword: 'zeal',
  name: 'Search Zeal..',
  settings: {
    keyword: {
      type: 'string',
      description:
        'keyword to bring up zeal. Make it empty to use it without keyword.',
      defaultValue: 'zeal'
    },
    ...options
  }
}
