var fs = require('fs')
var path = require('path');



module.exports = function (directory, extn, callback){


    fs.readdir(process.argv[2], function doneReading(err, list){
      var newList=[]
      if(err){
        return callback(err)
      }
        list.forEach(function(file){
          if(path.extname(file) === "."+extn){
            newList.push(file)
          }
        })
        return callback(null, newList,"jon")
    })

  }
