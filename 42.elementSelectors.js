/*
    Element Selectors - Methods used to target and manipulate HTML elements.
                        They allow you to select one or multiple HTML elements 
                        from the DOM (Document Object Module).

    1. document.getElementById()           - returns element or null
    2. document.getElementsByClassName()   - returns HTML collection
    3. document.getElementsByTagName()     - returns HTML collection
    4. document.querySelector()            - returns the first element or null
    5. document.querySelectorAll()         - returns NODE LIST

    HTML collection doesn't support .forEach() method, to use convert it to an array first.
    NODE List have built-in utility methods like .forEach()
*/

// document.getElementById()
const heading = document.getElementById("heading");
console.log(heading);
heading.style.backgroundColor = "Green";

// document.getElementByClassName()
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
for (fruit of fruits) {
    fruit.style.backgroundColor = "pink";
}

//document.getElementByTagName()
const h4Tags = document.getElementsByTagName("h4");
console.log(h4Tags);

const arrayOfH4Tags = Array.from(h4Tags);
arrayOfH4Tags.forEach((element) => element.style.backgroundColor = "orange");

//document.querySelector(".className or tag")
const element = document.querySelector(".fruits");
console.log(element);
element.style.backgroundColor = "grey";

//document.querySelectorAll()
const liTagElements = document.querySelectorAll("li");
console.log(liTagElements);
liTagElements.forEach((element) => element.style.backgroundColor = "magenta");
