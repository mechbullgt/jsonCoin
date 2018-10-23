"use strict";
var fileSystem = require('generate-schema');
console.log("Front End Logic Js");

function getJSONSchema(jsonInput){
    console.log("In getJSONSchma() from frontEndLogic");
    var inputJsonFile = JSON.parse(JSON.stringify(jsonInput));
    console.log("Data from Client:"+inputJsonFile);
    var theText = '{"Success":"true"}';
    var outputJsonFile = JSON.parse(JSON.stringify(theText));
    console.log("Output File:"+outputJsonFile);
    return outputJsonFile;
}
window.getJSONSchema = getJSONSchema;

// function readFileFromPath(path){
//     let rawData = fileSystem.readFileSync(path);
//     let theData = JSON.parse(rawData);
//     console.log("JSON Data:"+theData);
// }

// window.readFileFromPath = readFileFromPath;

// function fetchJSONFile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//                 console.log("Data:"+data);
//             }
//         }
//     };
//     httpRequest.open('GET', path);
//     httpRequest.send(); 
// }

// window.fetchJSONFile = fetchJSONFile;