#!/usr/bin/env node
//shebang character sequence to enable cli mode

var schemaGenerator = require('generate-schema');
const fs = require('fs');

// For CLI
// inputLocation is the location of JSON file for which schema is to be generated.
let inputLocation = process.argv[2];
console.log('JSON_Location:'+inputLocation);

// outputLocation is JSON file's newly generated Schema file's location taken as 3rd argument from the command line.
let outputLocation = process.argv[3];
console.log('Schema_Location:'+outputLocation);

// Creating the file to write the schema content.
fs.createWriteStream(outputLocation);

// Reading the JSON and generating the Schema. 
fs.readFile(inputLocation, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const jsonObject = JSON.parse(data);
        console.log(jsonObject);
        var schema = schemaGenerator.json(jsonObject);
        console.log(JSON.stringify(schema));
        // fs.writeFileSync('./resultJSONSchema/Output.json', JSON.stringify(schema));
        fs.writeFileSync(outputLocation,JSON.stringify(schema));
        console.log('JSON Schema generated at: '+outputLocation);
    }
});



