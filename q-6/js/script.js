//  Write a JAVASCRIPT Program to find ans of   (a*a) + (2*a*b) + (b*b) using return type with argument function


const fun6 = (a, b) => {
    //(2*2) + (2*2*3) + (3*3)
    let ans = (a * a) + (2 * a * b) + (b * b);
    return ans;
}

let result = fun6(2, 3);
document.getElementById("quadratic").innerHTML = result