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
  }

];