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
  }

];