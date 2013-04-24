#!/usr/bin/env node
var cp = require('child_process'), fs = require('fs'), path = require('path');

var flags = ['-w', '-lmysqlclient', '-lssl', '-lz', '-ldl', '-fPIC'];

if (process.platform === 'linux')
  flags = flags.concat(['-std=c++0x', '-lrt']);
else if (process.platform === 'darwin') {
  flags = flags.concat(['-I/opt/local/include',
                        '-I/opt/local/include/mysql',
                        '-I/opt/local/include/mysql5',
                        '-I/opt/local/include/mysql55',
                        '-L/opt/local/lib',
                        '-L/opt/local/lib/mysql5',
                        '-L/opt/local/lib/mysql5/mysql',
                        '-L/opt/local/lib/mysql55',
                        '-L/opt/local/lib/mysql55/mysql']);
}

flags = flags.join(' ');

if (!fs.existsSync(__dirname + '/bin'))
  fs.mkdirSync(__dirname + '/bin');

fs.readdirSync(__dirname).forEach(function(f) {
  if (/.cc$/.test(f)) {
    cp.exec('g++ -O2 -o ' + __dirname + '/bin/' + path.basename(f, '.cc') + ' ' + __dirname + '/' + f + ' ' + flags, function(err, stdout, stderr) {
      if (err) throw err;
      if (stderr.length)
        console.error(stderr);
    });
  }
});
