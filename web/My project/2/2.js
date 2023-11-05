function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    if (a<62) {
        result = (a**2+4+5);
        document.getElementById("result").innerText = result;
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = ( 1/(a**2) + 4*a + 5);
        document.getElementById("result").innerText = result;
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText;
console.log(messageText);
let result;
let check = false;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)