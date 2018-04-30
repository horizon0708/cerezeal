const { shellCommand } = require('cerebro-tools')
const { options } = require('./shorthand')

const fn = ({ term, display }) => {
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

  let match = term.match(/^zeal?\s(.+)$/)
  if (match) {
    const searchTerm = match[1]
    display({
      title: `Search for ${searchTerm} on Zeal`,

      onSelect: function () {
        zealCommand(searchTerm)
      }
    })
  }
}

module.exports = {
  fn,
  keyword: 'zeal',
  name: 'Search Zeal..',
  settings: options
}
