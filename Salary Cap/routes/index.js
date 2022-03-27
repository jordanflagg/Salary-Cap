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


ar1 = [0, 10, 5, 2, 20, 30, 45]
ar2 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];



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
     <title>Chart.js version 2 responsive doughnut with text inside</title> 
     <meta name="viewport" content="width=device-width, initial-scale=1">
     
     
     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
     <script type="text/javascript">
   window.onload=function(){//from  w ww  .  j a v  a  2  s.com
var data = {
  labels: ["${(cap.names).map(elmt => `${elmt}`).join('","')}"],
  datasets: [{
    backgroundColor: ["${color.map(elmt => `${elmt}`).join('","')}"],
    borderColor: 'rgb(0, 0, 0)',
    data: [${(cap.salary).map(elmt => `${elmt}`).join(',')}],
  }]
};
var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
 type: 'doughnut',
 data: data,
 options: {
  plugins: [ChartDataLabels],
  plugins: {
    tooltip: {
      enabled: true
    },
    datalabels: {
      formatter: (value,context) => {
        console.log(value)
        console.log(context)
        return context.dataset.data[0]
      }
    }
  }
  
},
});

Chart.pluginService.register({
 beforeDraw: function(chart) {
   var width = chart.chart.width,
       height = chart.chart.height,
       ctx = chart.chart.ctx;
   ctx.restore();
   var fontSize = (height / 114).toFixed(2);
   ctx.font = fontSize + "em sans-serif";
   ctx.textBaseline = "middle";
   var text =  "${capUse}%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;
   ctx.fillText(text, textX, textY);
   ctx.save();
 }
});
   }

     </script> 
  </head> 
  <style>
h1 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
</style>
  <p> Cincinnati Bengals</p>
  <body> 
     <canvas id="myChart"></canvas>  
  </body>
</html>`

}

