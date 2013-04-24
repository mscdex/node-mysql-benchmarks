var cp = require('child_process');

function Stats(pid, interval) {
  var self = this;
  this.buffer = '';
  this.timer = setInterval(function() {
    var proc = cp.spawn('ps', ['-o', '%cpu,%mem', '--no-headers', pid]);
    proc.setEncoding('ascii');
    proc.stdout.on('data', function(data) {
      self.buffer += data;
    });
  }, interval || 5000);
}
Stats.prototype.finish = function() {
  clearInterval(this.timer);
  return '%CPU,%MEM\n'
         + this.buffer.replace(/^[ \t]+/mg, '')
                      .replace(/[ \t]+/g, ',');
};

module.exports = Stats;
