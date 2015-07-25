var util = require('util');
var events = require('events');
var WallClock = require('/Users/jonhardman/Development/sandbox/sandbox/eep/eep-js/lib/eep.clock_wall').WallClock;
var Temporal = require('/Users/jonhardman/Development/sandbox/sandbox/eep/eep-js/lib/eep.core').Temporal;
var TemporalFunction = require('/Users/jonhardman/Development/sandbox/sandbox/eep/eep-js/lib/eep.core').TemporalFunction;
var eep = require("eep");
//util.inherits(PeriodicWindow, events.EventEmitter);

//module.exports.PeriodicWindow = PeriodicWindow;
//hello(aggFn, 10000)

AvgFunction.prototype = new eep.AggregateFunction();
function AvgFunction() {
  var self = this; var sum = 0; var count = 0;

  self.init = function() { sum = 0; count = 0; };
  self.accumulate = function(value) { sum += value; count++; };
  self.compensate = function(value) { sum -= value; count--; };
  self.emit = function()  { return (count == 0) ? 0 : (sum / count); };
  self.make = function() { return new AvgFunction(); };
};







  events.EventEmitter.call(this);
  var self = this
  var clock = new WallClock(30000)
  var fn = TemporalFunction.make(new AvgFunction(),clock.init());
  var idx = 0;

  fn.init();

  self.enqueue = function(v) {
    fn.accumulate(Temporal.make(v, clock.inc()));
  };

  self.tick = function() {
if (!clock.tick()) return;

if (clock.tock(fn.at())) {
      self.emit('emit', fn.emit().value());

fn.init();
    };
  };
