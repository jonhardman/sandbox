var eep = require('eep');



var interval = 3000
//Is this an observe pattern?
startWindow()


function startWindow(){
  var values = [ 2]
  //simulates events coming in
  var timer = setInterval(function(){
    values.push(Math.floor((Math.random() * 99) + 1))
    //window size i.e in a 60 minute peroid request the sensor values every minute.
  }, 1);

  setTimeout(function(){
  //do something after x milliseconds

    //take all the event data gathered in x milliseconds and analyse
    analyseWindow(values)
    //and call self recursively
    startWindow();

  },interval);

}




function analyseWindow(values) {
  //analyse window of data.

    //clearInterval(timer);
    // Tumbling windows
    var tumbling_count = eep.EventWorld.make().windows().tumbling(eep.Stats.count, values.length);
    var tumbling_sum = eep.EventWorld.make().windows().tumbling(eep.Stats.sum, values.length);
    var tumbling_min = eep.EventWorld.make().windows().tumbling(eep.Stats.min, values.length);
    var tumbling_max = eep.EventWorld.make().windows().tumbling(eep.Stats.max, values.length);
    var tumbling_mean = eep.EventWorld.make().windows().tumbling(eep.Stats.mean, values.length);
    var tumbling_stdevs = eep.EventWorld.make().windows().tumbling(eep.Stats.stdevs, values.length);
    var tumbling_vars = eep.EventWorld.make().windows().tumbling(eep.Stats.vars, values.length);

    // Register callbacks
    tumbling_count.on('emit', function(value) { console.log('count:\t\t' + value); });
    tumbling_sum.on('emit', function(value) { console.log('sum:\t\t' + value); });
    tumbling_min.on('emit', function(value) { console.log('min:\t\t' + value); });
    tumbling_max.on('emit', function(value) { console.log('max:\t\t' + value); });
    tumbling_mean.on('emit', function(value) { console.log('mean:\t\t' + value); });
    tumbling_stdevs.on('emit', function(value) { console.log('stdevs:\t\t' + value); });
    tumbling_vars.on('emit', function(value) { console.log('vars:\t\t' + value);});
    // Pump data into the tumbling windows
    for (var i in values) {
      tumbling_count.enqueue(values[i]);
      tumbling_sum.enqueue(values[i]);
      tumbling_min.enqueue(values[i]);
      tumbling_max.enqueue(values[i]);
      tumbling_mean.enqueue(values[i]);
      tumbling_stdevs.enqueue(values[i]);
      tumbling_vars.enqueue(values[i]);
    }


}
