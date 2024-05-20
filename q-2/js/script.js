// Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.


const cricleArea = (r) => {
    let pi = 3.14;
    let area = pi * r * r;
    return area;
}
let result = cricleArea(5);
document.getElementById("circel").innerHTML = result;