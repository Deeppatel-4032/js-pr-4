//Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function


const fun8 = (c) => {
    //(50*1.8)+32
    let f = (c * 1.8) + 32;
    return f;
}

let result = fun8(50);
document.getElementById("fahrenheit").innerHTML = result