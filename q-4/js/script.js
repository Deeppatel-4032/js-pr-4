// Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.


const rectangleArea = (l, h) => {
    let area = l * h;
    return area;
}   

let result = rectangleArea(20, 40);
document.getElementById("rectengle").innerHTML = result;
// console.log("area of rectangle is : ", result);