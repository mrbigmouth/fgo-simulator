/* eslint-env node */
/* eslint-disable no-console */

const exec = require('child_process').exec;
const ncp = require('ncp');

exec('node ./node_modules/meteor-build-client/main.js ./temp -p /fgo-simulator/', () => {
  const path = require('path');
  const destination = path.join(__dirname, '../');
  const source = path.join(destination, 'temp');
  ncp(source, destination, function(err) {
    if (err) {
      return console.error(err);
    }

    const imageFolder = path.join(destination, 'fgo-simulator');
    ncp(imageFolder, destination, function(err) {
      if (err) {
        return console.error(err);
      }

      const rimraf = require('rimraf');
      rimraf(path.join(destination, 'temp'), () => {
        rimraf(path.join(destination, 'public'), () => {
          rimraf(path.join(destination, 'client'), () => {
            rimraf(path.join(destination, 'fgo-simulator'), () => {
              console.log('done!');
            });
          });
        });
      });
    });
  });
});
