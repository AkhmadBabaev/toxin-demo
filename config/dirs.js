const path = require('path');

class Dirs {
  get input() {
    const name = 'src';
    const relativeName = `../${name}`;
    const dirPath = path.resolve(__dirname, relativeName);

    return { name, relativeName, path: dirPath };
  }

  get output() {
    const name = 'docs';
    const relativeName = `../${name}`;
    const dirPath = path.resolve(__dirname, relativeName);

    return { name, relativeName, path: dirPath };
  }

  get public() {
    const name = 'public';
    const relativeName = `../${name}`;
    const dirPath = path.resolve(__dirname, relativeName);

    return { name, relativeName, path: dirPath };
  }

  get assets() {
    const name = 'assets';
    const dirPath = `${this.input.path}/${name}`;

    return { name, path: dirPath };
  }

  get components() {
    const name = 'components';
    const dirPath = path.resolve(this.input.path, name);

    return { name, path: dirPath };
  }

  get styles() {
    const name = 'styles';
    const dirPath = `${this.input.path}/${name}`;

    return { name, path: dirPath };
  }

  get pages() {
    const name = 'pages';
    const dirPath = `${this.input.path}/${name}`;

    return { name, path: dirPath };
  }

  get images() {
    const name = 'images';
    const dirPath = path.resolve(this.assets.path, name);

    return { name, path: dirPath };
  }

  get fonts() {
    const name = 'fonts';
    const dirPath = path.resolve(this.assets.path, name);

    return { name, path: dirPath };
  }

  get favicons() {
    const name = 'favicons';
    const dirPath = `${this.images.path}/${name}`;

    return { name, path: dirPath };
  }
}

module.exports = new Dirs();
