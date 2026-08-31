/*
    DOM Navigation - The process of navigating through the structure of an HTML document using JavaScript.

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children - returns an HTML collection
*/

// ---------------- .firstElementChild ------------------
const unorderedLists = document.querySelectorAll("ul");

unorderedLists.forEach(element => {
    const firstElement = element.firstElementChild;
    if (firstElement.id != "coke") {
        firstElement.style.backgroundColor = "yellow";
    }
});

// ---------------- .lastElementChild -------------------
unorderedLists.forEach(element => {
    if (element.lastElementChild.id != "fruit beer") {
        (element.lastElementChild).style.backgroundColor = "pink";
    }
});

// ---------------- .nextElementSibling -----------------
const orange = document.getElementById("orange");
const nextSibling = orange.nextElementSibling;
nextSibling.style.backgroundColor = "green";

// ---------------- .previousElementSibling --------------
const kiwi = document.getElementById("kiwi");
const previousSibling = kiwi.previousElementSibling;
previousSibling.style.backgroundColor = "orange";

// ---------------- .parentElement --------------
const pepsi = document.getElementById("pepsi");
const pepsiParent = pepsi.parentElement;
pepsiParent.style.backgroundColor = "brown";

// ---------------- .children -------------------
const softDrinks = document.getElementById("softDrinks");
const children = softDrinks.children;
Array.from(children).forEach(element => element.style.color = "white");