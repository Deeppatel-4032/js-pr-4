//  Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

const fun7 = (f) => {
    //(f-32)/1.8
    let c = (f - 32) / 1.8;
    return c;
}

let result = fun7(50);
document.getElementById("celsius").innerHTML = result