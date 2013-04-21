var mysqlBaseTest = require('./_mysql_common');
module.exports.run = function(callback, cfg) {
  cfg.driver = 'mysql2';
  return mysqlBaseTest.run(callback, cfg);
};
