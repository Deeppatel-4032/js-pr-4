//Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

const fun10 = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

let result = fun10(60, 30);
document.getElementById("swap").innerHTML = result