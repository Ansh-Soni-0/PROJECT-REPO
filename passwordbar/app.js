const input = document.querySelector('input');
const eye = document.querySelector('#eye-icon');

eye.addEventListener('click' , () =>{
    // if(input.type === 'password'){
    //     input.type = 'text';
    // } else {
    //     input.type = "password";
    // }
    input.type = (input.type === 'password') ? 'text' : 'password';
})