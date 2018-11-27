(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
