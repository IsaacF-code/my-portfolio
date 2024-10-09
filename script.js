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
let form_contact = document.getElementById("form-contact");
let messageErro = document.getElementById("messageErro");

const handleSubmit = (event) => {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    messageErro.textContent = "";

    if (name == "") {
       messageErro.textContent = "O campo nome é obrigatório!";
       return
    }
    if (email == "") {
        messageErro.textContent = "O campo e-mail é obrigatório!"
        return
    } else if (!validEmail(email)) {
        messageErro.textContent = "Informe um e-mail válido!"
        return
    }
    if (subject == "") {
        messageErro.textContent = "O campo Assunto é obrigatório!";
        return
    }
    if (message == "") {
        messageErro.textContent = "O campo Sua mensagem é obrigatório!";
        return
    }

    messageErro.style.color = "green";
    messageErro.textContent = "Enviado com sucesso!";
}

const validEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email)
}