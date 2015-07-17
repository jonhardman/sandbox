//Exercise 1
//console.log("HELLO WORLD");

//Exercise 2 - accessing the process args
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }
//
// console.log(sum);

// Exercise 3 My first I/O file system sync
//load the file system module
 // var fs = require('fs')
 // var fileBuffer = fs.readFileSync(process.argv[2]);
 // console.log(fileBuffer.toString().split("\n").length-1)

//Exercise 4 My First I/O file async using a callback
// var fs = require('fs')
// var myNumber = 0
//
// function addOne(callback) {
//   //console.log("entering addOne Function");
//   //async i/o call to the file, with call back
//   fs.readFile(process.argv[2], function doneReading(err, fileContents) {
//     //console.log("Error Response:" + err);
//     myNumber = fileContents.toString().split("\n").length -1
//     callback()
//   })
// }
//
// function logMyNumber() {
//   //do this when the call back occurs
//   //console.log("callback function");
//   console.log(myNumber)
// }
//
//
//
// //console.log("about to call main function");
// addOne(logMyNumber)

//Exercise 5 Filtered LS (directory listing)
//node program.js /Users/jonhardman/Development/sandbox/sandbox txt

// var fs = require('fs')
// function readDir(callback){
//   fs.readdir(process.argv[2], function doneReading(err, list){
//     for (var i = 0; i < list.length; i++) {
//       if(list[i].indexOf(process.argv[3]) > 0){
//         console.log(list[i])
//       }
//     }
//   })
// }
//
// function logMyDir(){
//   //call back function
//   console.log("hello")
// }

//readDir(logMyDir)

//Exercise 6
// var myModule = require('./mymodule.js')
// 
//
// myModule(process.argv[2], process.argv[3], function(err,list){
//   if(err){
//     throw err;
//   }else{
//     list.forEach(function(file){
//       console.log(file)
//     })
//   }
// })

//Exercise 7 - http
//
// var http = require('http')
//
//
//   http.get(process.argv[2], function (response){
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   })
