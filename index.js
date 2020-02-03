const fs = require('fs')
const util = require('util')
const path = require('path')

const targetFileName = process.argv[2]
const targetPath = path.join(__dirname, 'demo.json')
const writeFile = util.promisify(fs.writeFile)
const csvFilePath = process.argv[2]
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        writeFile(targetPath, JSON.stringify(jsonObj))
    })
    