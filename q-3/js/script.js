// Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.


const triangleArea = (l, h) => {
    let area = (l * h) / 2;
    return area;
}   

let result = triangleArea(20, 50);
document.getElementById("triangale").innerHTML =  result;
