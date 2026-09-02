/*
    ClassList - Element property in JavaScript used to interact with an
                element's list of classes (CSS classes)
    Allows you to make reusable classes for many elements across your webpage

    .add()
    .remove()
    .toggle(remove if present or add if not)
    .replace(oldClass, newClass)
    .contains()
*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.classList.add("enabled");
    });
});

buttons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach((button) => {
    button.addEventListener("mouseout", (event) => {
        event.target.classList.toggle("hover");
        event.target.classList.remove("enabled");
    });
});

buttons.forEach((button) => {
    button.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (button.classList.contains("disabled")) {
                button.textContent = "🚫";
            } else {
                event.target.classList.replace("enabled", "disabled");
            }
        }
    });
});