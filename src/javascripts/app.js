import './asyncModules'
import exclaimify from './exclaimify';

const button = document.getElementById('button');

const alertAsyncMessage = function () {
    // CommonJS async syntax webpack magic
    require.ensure([], function () {
        const message = require("./asyncMessage");
        alert(exclaimify(message))
    })
};
console.log('jsssfnge');
console.log(`
  asset references like ts one:
    images/gulp.png
  get updated in js too!`);

button.addEventListener('click', alertAsyncMessage);
