"use strict";
var schemaGenerator = require('generate-schema');
console.log("Front End Logic Js");

function getJSONSchema(jsonInput){
    console.log("In getJSONSchma() from frontEndLogic");
    var inputJsonFile = JSON.parse(JSON.stringify(jsonInput));
    console.log("Data:"+jsonInput);
    console.log("Data from Client:"+inputJsonFile);
    var outSchemaFile = schemaGenerator.json(JSON.parse(jsonInput));
    console.log(outSchemaFile);
    var stringifySchema = JSON.stringify(outSchemaFile, null, 2);
    console.log("Schema:"+stringifySchema);
    return stringifySchema;
}
window.getJSONSchema = getJSONSchema;

function copySchemaToClipboard(elementId){
    console.log("Function to copy schema to the clipboard.");
    const fromElement = document.getElementById(elementId);
    fromElement.select();
    document.execCommand('copy');
    console.log('Schema copied to clipboard');
}
window.copySchemaToClipboard = copySchemaToClipboard;