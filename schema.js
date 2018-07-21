#!/usr/bin/env node
//shebang character sequence to enable cli mode

var schemaGenerator = require('generate-schema');
const fs = require('fs');
// For CLI
const [,, ...args] = process.argv;
console.log(`Hi ${args}`);

fs.readFile('./responseJSON/Input.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const jsonObject = JSON.parse(data);
        console.log(jsonObject);
        var schema = schemaGenerator.json(jsonObject);
        console.log(JSON.stringify(schema));
        fs.writeFileSync('./resultJSONSchema/Output.json', JSON.stringify(schema));
        console.log('JSON Schema generation successful!')
    }
});



