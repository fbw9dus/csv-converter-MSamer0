const dir = process.argv[0]

const csvFilePath='demo.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})


/*const fs = require('fs')
const util = require('util')
const path = require('path')
const csvToJson = require('https://github.com/MSamer0/csv-converter-MSamer0.git');


const fileInputName = 'demo.csv';
const fileOutputName ='package.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

const csvToJson = require('convert-csv-to-json');
 
const json = csvToJson.getJsonFromCsv("demo.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}*/