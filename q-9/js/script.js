//Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.


function fun9(n) {

    if (n % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }

}

let result = fun9(8);
document.getElementById("odd_even").innerHTML = result