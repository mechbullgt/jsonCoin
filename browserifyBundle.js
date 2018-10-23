(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var fileSystem = require('fs');
console.log("Front End Logic Js");

function readFileFromPath(path){
    let rawData = fileSystem.readFileSync(path);
    let theData = JSON.parse(rawData);
    console.log("JSON Data:"+theData);
}

window.readFileFromPath = readFileFromPath;

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
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
