var template, elBenchmarks;

function buildHTML(result) {
  var $cur = $('<div></div>').attr('id', result.id)
                             .attr('class', 'benchmark')
                             .prependTo(elBenchmarks),
      out = template, tmp = '';
  out = out.replace('{when}', result.when);
  for (var driver in result.versions.drivers) {
    tmp += '<li><b>';
    tmp += driver;
    tmp += '</b>: ';
    tmp += result.versions.drivers[driver];
    tmp += '</li>';
  }
  out = out.replace('{driver-version-list}', tmp); tmp = '';
  out = out.replace('{clib-version}', result.versions.clib);
  out = out.replace('{server-version}', result.versions.server);
  out = out.replace('{benchmarks-version}', result.versions.benchmarks);
  for (var setup in result.setup) {
    tmp += '<li><b>';
    tmp += setup;
    tmp += '</b>: ';
    tmp += result.setup[setup];
    tmp += '</li>';
  }
  out = out.replace('{setup}', tmp); tmp = '';
  $cur.html(out);
}

$(function() {
  template = document.getElementById('template').innerHTML;
  elBenchmarks = document.getElementById('benchmarks');
  var $result, id, isInit, data, result;
  for (var r=0,rlen=results.length; r<rlen; ++r) {
    result = results[r];
    buildHTML(result);
    drivers = [];
    $result = $('#' + result.id + ' div.results').first();
    for (var driver in result.drivers)
      drivers.push(driver);
    (function(drivers) {
    for (var i=0,len=result.tests.length; i<len; ++i) {
      id = result.id + '-' + result.tests[i];
      isInit = (result.tests[i].toUpperCase() === 'INIT');
      data = new Array(drivers.length);
      for (var j=0,len2=drivers.length; j<len2; ++j)
        data[j] = result.drivers[drivers[j]][i];
      $('<div></div>').attr('id', id)
                      .attr('class', 'graph')
                      .appendTo($result);
      (function(isInit) {
      new Highcharts.Chart({
        chart: {
          renderTo: id,
          type: 'column',
          width: 350,
          backgroundColor: '#D3D3D3',
        },
        title: {
          text: result.tests[i] + ' benchmark'
        },
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function() {
            return '<span style="color:' + this.series.color + ';font-weight:bold">'
                   + drivers[this.point.x] + '</span>: <b>'
                   + Highcharts.numberFormat(this.point.y, isInit ? 3 : 0)
                   + '</b><br/>';
          }
        },
        xAxis: {
          minorTickInterval: 'auto',
          categories: drivers,
          lineColor: '#000000',
          labels: {
            rotation: -45,
            align: 'right',
            style: {
              fontSize: '16px',
              fontFamily: 'sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          tickColor: '#000000',
          gridLineColor: '#000000',
          allowDecimals: true,
          title: {
            text: (isInit
                   ? 'avg. time in seconds'
                   : 'avg. ' + result.tests[i] + 's per second')
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          data: data/*,
          dataLabels: {
            enabled: true,
            rotation: -45,
            color: '#000000',
            align: 'left',
            x: 8,
            y: -5,
            formatter: function() {
              return Highcharts.numberFormat(this.y, isInit ? 3 : 0);
            },
            style: {
              fontSize: '13px',
              fontFamily: 'sans-serif'
            }
          }*/
        }]
      });
      })(isInit);
    }
    })(drivers);
  }
});