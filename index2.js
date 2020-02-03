const fs = require('fs')
const util = require('util')
const path = require('path')
const targetFileName = process.argv[2];
const targetPath = path.join(__dirname,'json.txt')
const csv=require('csvtojson')
const writeFile = util.promisify(fs.writeFile)
const arg = process.argv
const dir = process.argv[2]
if(arg.length == 2){
    console.log("Please provide a csv file to convet to JSON")
} else if (arg.length == 3){
    csv()
    .fromFile(dir)
    .then((jsonObj)=>{
        console.log(jsonObj);
        writeFile(targetPath,JSON.stringify(jsonObj)) 
        });
}else if(arg.length == 4){
    csv()
    .fromFile(dir)
    .then((jsonObj)=>{
        fs.writeFile(process.argv[3], JSON.stringify(jsonObj), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          }); 
        console.log(jsonObj);
        });
} else{
    console.log("Something went wrong, Could not write json to: ", process.argv[3])
}

