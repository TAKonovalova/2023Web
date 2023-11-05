function verify() {
    console.log("a")
    let a = parseInt(elementA.innerText);
    console.log(a)

    if (a<62) {
        result = ' a < 62,   x = a^2 + 4 + 5 ='+(a**2+4+5);
        document.getElementById("result").innerText =  result;
    } else {
        result = " a >= 62,   x=1/(a^2) + 4*a + 5="+( 1/(a**2) + 4*a + 5);
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);