# Cerezeal

This is a [Cerebro](https://cerebroapp.com) plugin, that uses [Zeal](https://zealdocs.org/)'s command-line tool to search Zeal from Cerebro.

## Installation
1. Add Zeal's installation directory to your PATH directory
  - Don't know how? [Windows](https://www.java.com/en/download/help/path.xml), [OSX](https://www.architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/), [Ubuntu](https://askubuntu.com/questions/60218/how-to-add-a-directory-to-the-path)
  - now, you can type `zeal lang:search_term` in the terminal to search from the terminal.
  - and I've just realised now that I can also press WIN key and type `zeal lang:search_term`to achieve the same thing. I should have thought about that before writing this plugin.
2. Install the plugin ;(

## Usage
- zeal [LANGUAGE] [SEARCH_TERM] or
- zeal [LANGUAGE:SEARCH_TERM]

## Shorthand
I am  too lazy to type `javascript` or `typescript`. So under config for this plugin, you can set the shorthands. For example, if you set Javascript to 'js', then you can type `js:reduce` instead of `javascript:reduce`, saving you 8 keystrokes!!

The plugin currently only supports a limited list of languages for shorthands because I am lazy. You can add support for your language by adding it to the array under `shorthand.js`, and sending a pull request.


 