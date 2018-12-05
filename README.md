# webpack-starterkit
Configured webpack for web design who like to use webpack without wasting time by configure it. It has included scss, boostrap-4 and fontawesome-5

![Webpack Starterkit](https://github.com/kmrifat/webpack-starterkit/blob/master/preview.png?raw=true)

## Library included
 - Bootstrap 4.*
 - Fontawesome 5.*
 - jQuery 3.3.*
 - Popper.js 1.4.*
 
## Stylesheet language 
- Scss
- Sass

## Installation
Webpack starterkit require `nodejs-v8` or later.

```
git clone
cd webpack-starterkit
npm install && npm start
```
It will automatically start your default web browser with `http://localhost:8080/` . You will see the default landing page of webpack starterkit.

## Documentation

Open webpack startkit in your favorite IDE/Texteditor. You will see a source tree like this one 
```
/webpack-starterkit
|-- node_modules
|-- src
|   |-- assets
|   |   |-- icons
|   |   `-- images
|   |-- css
|   |   `-- style.css
|   |-- pages
|   |   `-- index.html
|   |-- scss
|   |   |-- vendors
|   |   |   |--_bootstrap.scss
|   |   |   |--_fontawesome.scss
|   |   `-- main.scss
|   `-- app.js
|-- package.json
|-- preview.png
|-- README.md
`-- webpack.config.js
```
- `webpack.config.js` you can add/remove webpack plugins by customize this file. \
- `package.json` contain node packages. \
- `src/assets` it's folder with two sub folder images and icons you need to save images what to want to add your website. you can delete default subfolders but do not delete or rename 
- `src/css` it's a folder with a .css file you can simply delete it you you don't wont to working with css.\
- `src/pages` in this folder you will have your html files.\
- `src/scss` scss folder contain `vendors` folder and a file called `main.scss` bootstrap and fontawesome 5 are configured in this folder. you can add more vendors scss if you like to .\
- `src/app.js`
```
import './scss/main.scss'; // imported main scss

import bootstrap from 'bootstrap'; // imported bootstrap js

// disble comment at 7 number line. if you like to work with css
// import './css/style';

```
if you like css rether then scss you can comment or delete `import './scss/main.scss'` and disble comment `import './css/style';`. So now you can use css in your project\

### Important

By default every local `<img src="image.png">` is `required (require('./image.png'))`.\
but here you don't need it just use `<img src="../assets/{your-file}">` see `src/pages/index.html` as reffrence.

### Deployment
After comple design just use this comment to build production ready files
```
npm run prod
```
It will minify the `html`,`css` and `js` files and copy `iamges` with hasname into the `dist` folder