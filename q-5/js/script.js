// Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.


const fun5 = (a, b, c) => {
    //(2 x 2 ) - (4 x 1 x 3) / (2 x 1)
    let ans = ((b * b) - (4 * a * c) ) / (2 * a);
    
    return ans;
}

let result = fun5(1, 2, 3);
document.getElementById("quadratic").innerHTML = result