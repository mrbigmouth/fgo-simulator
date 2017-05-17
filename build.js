const exec = require('child_process').exec;
const ncp = require('ncp');

exec('node ./node_modules/meteor-build-client/main.js ./temp', () => {
  const path = require('path');
  const destination = __dirname;
  const source = path.join(destination, 'temp');
  ncp(source, destination, function (err) {
    if (err) {
     return console.error(err);
    }
    const rimraf = require('rimraf');
    rimraf(path.join(destination, 'temp'), () => {
      rimraf(path.join(destination, 'public'), () => {
        rimraf(path.join(destination, 'client'), () => {
          console.log('done!');
        });
      });
    });
  });
});
