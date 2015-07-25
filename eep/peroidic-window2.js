

var eep = require("eep");
var events = require('events');




var periodic_count = eep.EventWorld.make().windows().periodic(eep.Stats.count, 0);
var periodic_sum = eep.EventWorld.make().windows().periodic(eep.Stats.sum, 0);
var periodic_min = eep.EventWorld.make().windows().periodic(eep.Stats.min, 0);
var periodic_max = eep.EventWorld.make().windows().periodic(eep.Stats.max, 0);
var periodic_mean = eep.EventWorld.make().windows().periodic(eep.Stats.mean, 0);
var periodic_stdevs = eep.EventWorld.make().windows().periodic(eep.Stats.stdevs, 0);
var periodic_vars = eep.EventWorld.make().windows().periodic(eep.Stats.vars, 0);

// Register callbacks
periodic_count.on('emit', function(value) { console.log('count:\t\t' + value); });
periodic_sum.on('emit', function(value) { console.log('sum:\t\t' + value); });
periodic_min.on('emit', function(value) { console.log('min:\t\t' + value); });
periodic_max.on('emit', function(value) { console.log('max:\t\t' + value); });
periodic_mean.on('emit', function(value) { console.log('mean:\t\t' + value); });
periodic_stdevs.on('emit', function(value) { console.log('stdevs:\t\t' + value); });
periodic_vars.on('emit', function(value) { console.log('vars:\t\t' + value);});

    var results = [];
    // periodic.on('emit', function(v) {
    //   results.push(v);
    //  });

//simulate an event coming in


    setInterval(function(){
      var rnd = Math.floor((Math.random() * 99) + 1)
      //periodic.enqueue(rnd)
      periodic_count.enqueue(rnd)
      periodic_sum.enqueue(rnd)
      periodic_min.enqueue(rnd)
      periodic_max.enqueue(rnd)
      periodic_mean.enqueue(rnd)
      periodic_stdevs.enqueue(rnd)
      periodic_vars.enqueue(rnd)

      //console.log(rnd);
      //window size i.e in a 60 minute peroid request the sensor values every minute.
    }, 1);

//simulate a tick closes the window
    setInterval(function(){
      console.log("tick");
      //periodic.tick();
      periodic_count.tick();
      periodic_sum.tick();
      periodic_min.tick();
      periodic_max.tick();
      periodic_mean.tick();
      periodic_stdevs.tick();
      periodic_vars.tick();

    },10000);

    console.log(results);
