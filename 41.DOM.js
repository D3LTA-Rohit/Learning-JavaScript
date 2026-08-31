/*
    DOM - Document Object Model

    Object {} that represents the page you see in the web browser and 
    provides you with an API to interact with it.

    Web Browser constructs the DOM when it loads the HTML document and structures all the elements in a
    tree-like representation.

    JavaScript can access the DOM to dynamically change the content, structure, and style of a Web Page. 
*/

console.log(document);
console.dir(document);

document.title = "DOM";

document.body.style.backgroundColor = "rgb(00,45,32)";