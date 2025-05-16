//VARIABLES PARA UTILIZAR EN EL EVENTO DE 
const loginBtn = document.getElementById('loginToggle');
const loginForm = document.getElementById('loginForm');
const loginBtnContainer = document.getElementById('loginBtnContainer');

const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// console.log(loginBtn);
// console.log(loginForm);
// console.log(loginBtnContainer);
// console.log(submitBtn);

// MUESTRA Y OCULTA EL LOGIN Y CAMBIA LA DISPOSICIÓN DE LOS BOTONES.
loginBtn.addEventListener('click', () => {
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
    if(loginForm.style.display !== 'none'){
        loginBtnContainer.style.flexDirection = loginBtnContainer.style.flexDirection === 'column' ? 'row' : 'column';
    }else{
        loginBtnContainer.style.flexDirection = loginBtnContainer.style.flexDirection === 'row' ? 'column' : 'row';
    }
});

submitBtn.addEventListener('submit', () => {
    const user = userInput;
    const pass = passInput;

    if(user === "mario" && pass === "1234"){
        alert('Login exitoso!')
    }else{
        alert('Login fallido!')
    }
});