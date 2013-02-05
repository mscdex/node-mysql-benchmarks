var results = [

  {
    id: '20120831',
    when: 'August 31, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0784,11637837.1,8016,800883.4],
      'PHP': [0.0813,2198127.3,6189.5,306978.1],
      'db-mysql': [0.0771,1580330.6,3077,160230.6],
      'mysql': [0.0809,966522.7,1930.9,331017],
      'mysql-libmysqlclient': [0.0738,2068230.3,3507.3,111506.5],
      'mysql-native': [0.0832,0,4557.6,285893.8],
      'mariasql': [0.0735,2995443.6,7096.6,467951.1],
      'OVERALL': [0.078314286,3063784.514,4910.7,352065.7857]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.3.3',
        'mysql-native': '0.4.4',
        'mariasql': '<a href="https://github.com/mscdex/node-mariasql/tree/8d0fd218246284d87ca07487f790a825640726be">master@8d0fd21</a>'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/0c7b9bcf21c2db69c7089565e63c836161c3eabb">0c7b9bc</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0)',
      clib: '5.5.25',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': 'SELECT * FROM test_table',
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '60,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000'
    }
  },

  {
    id: '20120901',
    when: 'September 1, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0824,11789065.5,6636.1,885145.5],
      'PHP': [0.0787,2203684.4,5823,329666.3],
      'db-mysql': [0.0801,1605075.1,3157.6,119519.6],
      'mysql': [0.0757,952883.5,1950,298823.6],
      'mysql-libmysqlclient': [0.0771,2183289.3,3580.3,77308],
      'mysql-native': [0.0846,0,3423.8,318398.5],
      'mariasql': [0.0773,3036527.5,6787.8,480058.2],
      'OVERALL': [0.079414286,3110075.043,4479.8,358417.1]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.3.3',
        'mysql-native': '0.4.4',
        'mariasql': '<a href="https://github.com/mscdex/node-mariasql/tree/8d0fd218246284d87ca07487f790a825640726be">master@8d0fd21</a>'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/0c7b9bcf21c2db69c7089565e63c836161c3eabb">0c7b9bc</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.25',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': 'SELECT * FROM test_table',
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000'
    }
  },

  {
    id: '20120905',
    when: 'September 5, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0818,11692771.7,16638.7,968263.3],
      'PHP': [0.0817,2194897.5,15492.9,328968.2],
      'db-mysql': [0.084,1561538.2,3718.3,120146.2],
      'mysql': [0.0783,958060.6,1940.5,301044.5],
      'mysql-libmysqlclient': [0.0732,2916800.8,4722.7,83347.7],
      'mysql-native': [0.0986,0,3667,304747.5],
      'mariasql': [0.0876,2744032.6,6156.9,461758.5],
      'OVERALL': [0.0836,3152585.914,7476.714286,366896.5571]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.4.0',
        'mysql-native': '0.4.7',
        'mariasql': '<a href="https://github.com/mscdex/node-mariasql/tree/579c104b5073d1a5d80bd95447590b64f230dc06">master@579c104</a>'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/0c7b9bcf21c2db69c7089565e63c836161c3eabb">0c7b9bc</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.25',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': 'SELECT * FROM test_table',
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000'
    }
  },

  {
    id: '20120906',
    when: 'September 6, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0815,11354267.3,16800.9,1047656.8],
      'PHP': [0.0856,2191009,15115.8,398874.4],
      'db-mysql': [0.0835,1589783.4,3785.7,0],
      'mysql': [0.0823,939313.1,1963.3,0],
      'mysql-libmysqlclient': [0.075,2857077.2,4694.4,89427.4],
      'mysql-native': [0.0846,0,3656.2,385666.3],
      'mariasql': [0.0762,2709706.6,6152,617024.9],
      'OVERALL': [0.081242857,3091593.8,7452.614286,362664.2571]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.4.0',
        'mysql-native': '0.4.7',
        'mariasql': '<a href="https://github.com/mscdex/node-mariasql/tree/579c104b5073d1a5d80bd95447590b64f230dc06">master@579c104</a>'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/55b13cb85149fa9720656f4e775bd6b3969bf9ad">55b13cb</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.25',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': 'SELECT * FROM test_table',
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000',
      'cfg.use_array_rows': 'true'
    }
  },

  {
    id: '20120907',
    when: 'September 7, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0762,11255685.2,16790,831273.6],
      'PHP': [0.0807,2185743.4,14984.9,310417.5],
      'db-mysql': [0.0868,1559428.9,3802.7,121104.6],
      'mysql': [0.072,946371.4,1998.1,227067.7],
      'mysql-libmysqlclient': [0.0788,2740042,4630.8,52956.4],
      'mysql-native': [0.0901,0,3658.6,142277.9],
      'mariasql': [0.0794,2672665.3,6114.4,354728.3],
      'OVERALL': [0.080571429,3051419.457,7425.642857,291403.7143]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.4.0',
        'mysql-native': '0.4.7',
        'mariasql': '<a href="https://github.com/mscdex/node-mariasql/tree/579c104b5073d1a5d80bd95447590b64f230dc06">master@579c104</a>'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/55b13cb85149fa9720656f4e775bd6b3969bf9ad">55b13cb</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.25',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': "SELECT *, x'AABBCCDDEEFF00112233445566778899' AS binstr FROM test_table",
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000',
      'cfg.use_array_rows': 'false'
    }
  },

  {
    id: '20120916',
    when: 'September 16, 2012',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0755,11471449.6,5450.8,980660.1],
      'PHP': [0.0768,2190734.6,4511.9,386000.2],
      'db-mysql': [0.0806,1521963.5,3130.3,161432.7],
      'mysql': [0.0862,894761.8,1911,310796.2],
      'mysql-libmysqlclient': [0.0801,2790214.9,3608.5,88796.6],
      'mysql-native': [0.0772,0,3286,313803.9],
      'mariasql': [0.0748,2717410.6,5786,467850.1],
      'OVERALL': [0.078742857,3083790.714,3954.928571,387048.5429]
    },
    versions: {
      drivers: {
        'PHP': '5.3.10',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha3',
        'mysql-libmysqlclient': '1.5.1',
        'mysql-native': '0.4.7',
        'mariasql': '0.1.6'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/55b13cb85149fa9720656f4e775bd6b3969bf9ad">55b13cb</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.27',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': "SELECT * FROM test_table",
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000',
      'cfg.use_array_rows': 'false'
    }
  },

  {
    id: '20130205',
    when: 'February 5, 2013',
    tests: ['Init', 'Escape', 'INSERT', 'SELECT'],
    drivers: {
      'C': [0.0738,11829262.3,4888.4,639397.9],
      'PHP': [0.0812,2733786,4652,484873.8],
      'db-mysql': [0.0769,1476122.4,3078.7,145469.3],
      'mysql': [0.0756,914958.3,1518.9,134998.4],
      'mysql-libmysqlclient': [0.0736,2754401,3850,89595.6],
      'mysql-native': [0.0911,0,3285.4,310613.6],
      'mariasql': [0.0816,2308986.6,5129.9,437800.2],
      'OVERALL': [0.0791142857,3145359.51428571,3771.9,320392.685714286]
    },
    versions: {
      drivers: {
        'PHP': '5.4.6',
        'db-mysql': '0.7.6',
        'mysql': '2.0.0-alpha7',
        'mysql-libmysqlclient': '1.5.1',
        'mysql-native': '0.4.7',
        'mariasql': '0.1.13'
      },
      benchmarks: '<a href="https://github.com/mscdex/node-mysql-benchmarks/tree/6c0b60664edd1ee04c087b0fb23b2ea0cdf5681d">6c0b606</a>',
      server: '5.5.25a (Community Server) (from stock XAMPP 1.8.0) with `max_heap_table_size=4294967295`',
      clib: '5.5.29',
    },
    setup: {
      'Hardware': 'Intel Core i7-860 @ 2.80GHz / 8GB RAM / Ubuntu 12.04 Server (x64)',
      '# runs': 10,
      'cfg.create_table_query': 'CREATE TABLE test_table (alpha INTEGER, beta VARCHAR(128), pi FLOAT) ENGINE=MEMORY',
      'cfg.insert_query': "INSERT INTO test_table VALUES (1, 'hello', 3.141)",
      'cfg.select_query': "SELECT * FROM test_table",
      'cfg.escape_count': '6,000,000',
      'cfg.string_to_escape': "str\\str\"str\'str\x00str",
      'cfg.insert_rows_count': '500,000',
      'cfg.delay_before_select': '1,000',
      'cfg.cooldown': '10,000',
      'cfg.use_array_rows': 'false'
    }
  }

];