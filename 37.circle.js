//export - keyword helps to export the functions and variables to other JavaScript files.
export const PI = 3.14;

export function getArea(radius) {
    return PI * radius * radius;
}

export function getCircumference(radius) {
    return 2 * PI * radius;
}