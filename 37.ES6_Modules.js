/*
    ES6 Module - An external file that contains reusable code that can be imported into other JavaScript
                files.
                
                Write usable code for many different apps.
                
                Can contains variables, classes, functions and ... more.

                Introduced as part of ECMAScript 2015 update.
*/

import { PI, getArea, getCircumference } from "./37.circle.js";

console.log("Area: " + getArea(12).toFixed(2));
console.log("Circumference: " + getCircumference(12).toFixed(2));