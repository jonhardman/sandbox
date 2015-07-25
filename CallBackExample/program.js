//Exercise 6
var myModule = require('./mymodule.js')
var myModule2 = require('./cbmodule.js')


myModule(process.argv[2], process.argv[3], function(err,list, name){
  if(err){
    throw err;
  }else{
    list.forEach(function(file){
      console.log(file)
      console.log(name);
    })
  }
})



myModule2(process.argv[4], function(message){
   console.log(message);
  })
