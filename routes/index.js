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
var gen = require('../genHTML')

var teamName = 'cincinnati-bengals'
exports.teamName = teamName
//cap.GetCapInfo(teamName)



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

//setTimeout(function2, 750);


var teamName = 'cincinnati-bengals'



setTimeout(function() {
  console.log('start')
  // after 1000ms, call the `setTimeout` callback
  // In the meantime, continue executing code below
  setTimeout(function() {
    gen.GenHTML()//runs second after 1100ms
    console.log('HTML')
  },1500)

  cap.GetCapInfo(teamName) //runs first, after 1000ms
  console.log('cap')
},1)






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











