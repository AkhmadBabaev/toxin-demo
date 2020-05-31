/**
 * Parses a string into file components.
 *
 * @param {string} str - format of necessary files.
 * @return {object} file options - file(name.extension), name, extension.
 */
function parseFile(str) {
  const start = str.includes('/') ? str.lastIndexOf('/') + 1 : 0;
  const file = str.slice(start);
  const [name, extension] = file.split('.');
  return { file, name, extension };
}

module.exports = {
  parseFile,
};
