var wavInfo= require('./wav-info.js');


var filename = process.argv[2];

wavInfo.infoByFile(filename, function(err, info) {
  if(err) console.log(err, info);
  else console.log(info);
})
