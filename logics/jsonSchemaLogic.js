"use strict";
var schemaGenerator = require('generate-schema');
console.log("Front End Logic Js");

function getJSONSchema(jsonInput){
    console.log("In getJSONSchma() from frontEndLogic");
    var inputJsonFile = JSON.parse(JSON.stringify(jsonInput));
    console.log("Data from Client:"+inputJsonFile);
    var outSchemaFile = schemaGenerator.json(JSON.parse(jsonInput));
    var stringifySchema = JSON.stringify(outSchemaFile, null, 2);
    console.log("Schema:"+stringifySchema);
    return stringifySchema;
}
window.getJSONSchema = getJSONSchema;