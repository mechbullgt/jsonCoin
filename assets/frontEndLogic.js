// var fileSystem = require('fs');
// console.log("Front End Logic Js");

// function readFileFromPath(path){
//     let rawData = fileSystem.readFileSync(path);
//     let theData = JSON.parse(rawData);
//     console.log("JSON Data:"+theData);
// }

// window.readFileFromPath = readFileFromPath;

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
                console.log("Data:"+data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

window.fetchJSONFile = fetchJSONFile;