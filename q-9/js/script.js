//Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.


function fun9(n) {

    if (n % 2 == 0) {
    
        return "even :" + even;
    }
    else {
        return "odd : " + odd;
    }

}

let even = 4;
let odd  = 5;
let result = fun9(even);
let result1 = fun9(odd);
document.getElementById("even").innerHTML = result;
document.getElementById("odd").innerHTML = result1;

