const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const dirs = require('./dirs');
const { parseFile } = require('./utils');

/**
 * Generates HTML pages using the HtmlWebpackPlugin.
 *
 * @return {array} List of the HtmlWebpackPlugin objects.
 */
module.exports = () => {
  const files = glob.sync(`${dirs.pages.path}/*/*.pug`);

  return files.map((key) => {
    const file = parseFile(key);

    return new HtmlWebpackPlugin({
      currentEnv: process.env.NODE_ENV,
      template: key,
      filename: `${file.name}.html`,
      inject: false,
      hash: false,
    });
  });
};
