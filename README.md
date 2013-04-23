Benchmarks for MySQL modules for Node.js
=========================================

You can install this via npm:

    # npm install -g mysql-modules-benchmarks

And run:

    # mysql-modules-benchmarks


You will also need to make sure that `max_heap_table_size=4294967295` is set in your server configuration.


Supported MySQL modules
-----------------------

* [mariasql](https://github.com/mscdex/node-mariasql)
* [mysql-libmysqlclient](https://github.com/Sannis/node-mysql-libmysqlclient)
* [mysql](https://github.com/felixge/node-mysql)
* [mysql2](https://github.com/sidorares/node-mysql2)
* [mysql-native](https://github.com/sidorares/nodejs-mysql-native)

Benchmarks (synchronous) for PHP and C are also included.


Benchmark results
-----------------

Some benchmark results are available [here](http://mscdex.github.com/node-mysql-benchmarks).
