

function send() {
        document.getElementById("UserEnter").submit();

}

function verify_send() {
    send();
}

    

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)