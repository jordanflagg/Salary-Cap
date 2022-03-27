var express = require('express');
var router = express.Router();
var cap = require('../cap')
//const Chart = require('chart.js');
//var buildchart = require('../buildchart')
//var $ = require( "jquery" );
const path = require('path')
const { dirname } = require('path');
const appDir = dirname(require.main.filename)
const fs = require('fs')


cap.GetCapInfo



setTimeout(function2, 750);









/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  ;
});

router.get('/chart', function(req, res, next) {
  res.render('chart copy')
  //buildchart.buildChart(cap.names,cap,cap.salary)
  ;
});

router.get('/test', function(req, res, next) {
  res.sendFile('test.html', { root: 'views' });
});

router.get('/test2', function(req, res, next) {
  //res.sendFile('test copy.html', { root: 'views' });
  
  try {
    fs.writeFileSync(__dirname + '/../views/test copy.html', content)
    res.sendFile('test copy.html', { root: 'views' });
    //file written successfully
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;


function dynamicColors() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

var color = []
for (i = 0; i < 51; i++){
  color.push(dynamicColors())
}






function function2() {
  // all the stuff you want to happen after that pause
  //console.log(cap.names);
 // console.log(cap.salary)

  salary = cap.salary
  capTotal = 0
  capLimit = 208200000
  
  for (i=0; i<51; i++){
    salary[i] = salary[i].replace(/\,/g,'')
    salary[i] = salary[i].replace(/\$/g,'')
    salary[i] = Number(salary[i])
    capTotal += salary[i]
  
  }

  capUse = Math.round(capTotal/capLimit*100)
  console.log(cap.salary)

  content = `<html>
  <head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0-rc.1/Chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>

  <style>
h2 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
</style>

  <body>
  
  <div style=" width: 12.5%; 
    margin: 15px auto;" class="container">
    <h2>Chart.js — Pie Chart Demo</h2>
    <div>
      <canvas style="position:absolute;top:540px;" id="myChart"></canvas>
    </div>
  </div>
  
  <script>
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Cap Spent','Cap Space Left'],
      datasets: [{
        backgroundColor: ["rgba(255,0,0, 0.5)","rgba(0,128,0, 0.5)"],
        borderColor: 'rgb(0, 0, 0)',
        data: [${capTotal},${capLimit-capTotal}]
      }]
    },
    options: {
      plugins:{
        legend: {
          display: false
       },
       tooltips: {
          enabled: true
       }
      }
      
    }
  });
  </script>
  
  
  <div style=" width: 50%;
    margin: 15px auto;" class="container">
  <canvas id="donut" ></canvas>
  </div>
  <script>
  var ctx = document.getElementById("donut").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["${(cap.names).map(elmt => `${elmt}`).join('","')}"],
      datasets: [{
        backgroundColor: ["${color.map(elmt => `${elmt}`).join('","')}"],
        borderColor: 'rgb(0, 0, 0)',
        data: [${(cap.salary).map(elmt => `${elmt}`).join(',')}],
      }]
    }
  });
    </script>
  </body>
  </html>`

}

