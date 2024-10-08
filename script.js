let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Mask Phone
const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value)  return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

// Submit Form
const handleSubmit = () => {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    // if (name.value == "") {
    //     alert("Nome não informado!");
    //     name.focus();
    // }
    // if (email.value == "") {
    //     alert("E-mail não informado!");
    //     email.focus;
    // }
    // if (tel.value == "") {
    //     alert("Celular não informado!");
    //     tel.focus;
    // }
    // if (subject.value == "") {
    //     alert("Assunto não informado!");
    //     subject.focus;
    // }
    // if (message.value == "") {
    //     alert("Mensagem não informada!");
    //     message.focus;
    // }
}