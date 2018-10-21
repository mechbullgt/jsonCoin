const fileSystem = require('fs');

function getJSON() {
    var jsonFromHTML = document.getElementById("inputBox").value;
    var jsonFilePathFromHtml = document.getElementById('readFile').value;
    console.log("JSON File Content" + jsonFromHTML);
    console.log("JSON File's Path:" + jsonFilePathFromHtml);
    document.getElementById('outputBox').innerHTML = jsonFilePathFromHtml;
    return jsonFilePathFromHtml;
}

function readFileFromPath(path){
    let rawData = fileSystem.readFileSync(path);
    let theData = JSON.parse(rawData);
    console.log("JSON Data:"+theData);
}
