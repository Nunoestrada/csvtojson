const path = require('path');
const fs = require('fs');
const csv = require('csvtojson');

function readcsv(file = '/customer-data.csv', callback){
  csv()
  .fromFile(path.join(__dirname,file))
  .then((jsonobject) => {
    var readableJson = JSON.stringify(jsonobject);
    fs.writeFileSync(path.join(__dirname,'convertedfile.json'),readableJson);
  })
}

readcsv(process.argv[2]);
