"use strict";
// var jsonBeautify = require('prismjs');
console.log("Front End Logic Js");

function getPrettyJSON(jsonInput){
    console.log("In getPrettyJSON() from frontEndLogic");
    var inputJsonFile = JSON.parse(jsonInput);
    var outputJsonFile = JSON.stringify(inputJsonFile,null,2);
    console.log("PrettyJSON:"+outputJsonFile);
    return outputJsonFile;
}
window.getPrettyJSON = getPrettyJSON;

function copySchemaToClipboard(elementId){
    console.log("Function to copy schema to the clipboard.");
    const fromElement = document.getElementById(elementId);
    fromElement.select();
    document.execCommand('copy');
    console.log('Schema copied to clipboard');
}
window.copySchemaToClipboard = copySchemaToClipboard;