# Cerezeal

This is a [Cerebro](https://cerebroapp.com) plugin, that uses [Zeal](https://zealdocs.org/)'s command-line tool to search Zeal from Cerebro that offers shorthand customisation.

![demo](/doc/cerezeal.gif)


## Installation
1. Add Zeal's installation directory to your PATH directory. Help if you don't know how: [Windows](https://www.java.com/en/download/help/path.xml), [OSX](https://www.architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/) and [Ubuntu](https://askubuntu.com/questions/60218/how-to-add-a-directory-to-the-path)
2. Install the plugin by typing `plugins cerezeal` on Cerebro

## Usage
- zeal LANGUAGE SEARCH_TERM or
- zeal LANGUAGE:SEARCH_TERM
- the keyword 'zeal' can be changed to any word you'd like in the settings. Make it empty to trigger the plugin without typing any keyword.

## Shorthand
If you are too lazy like me to be bothered type long language names such as JavaScript, You can set the shorthands in the settings. For example, you may set Javascript to 'js', then you can type `js reduce` instead of `javascript reduce`, saving you 8 keystrokes!! If you change the keyword from 'zeal' to 'z', it saves you 3 more keystrokes! Thats 11 keystorkes!! 

The plugin currently only supports a limited list of languages for shorthands because I am lazy. You can add support for your language by adding it to the array under `shorthand.js`, and submitting a pull request.

## Notes
- I would like to be able to display Zeal's search results via this plugin in the future, which I suspect is not an easy task. I have no clue how to go about making this feature possible. If a kind soul could point me in the right direction, I would appreciate it.
 