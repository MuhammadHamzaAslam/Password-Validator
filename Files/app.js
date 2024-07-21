let inp = document.getElementById('inp');
let letter = document.getElementById('letter');
let special = document.getElementById('special');
let lower = document.getElementById('lower');
let upper = document.getElementById('upper');
let number = document.getElementById('number');

let lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numberArr = '0123456789'.split('');
let specialCharacters = '@!#$%^&*<>?/'.split('');

function showPassword() {
    let inpValue = inp.value;
    console.log(inpValue);

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < inpValue.length; i++) {
        let characters = inpValue[i]
        for (let j = 0; j < lowerCaseLetter.length; j++) {
            if (characters == lowerCaseLetter[j]) {
                hasLower = true
                break
            }
        }
        for (let j = 0; j < upperCaseLetter.length; j++) {
            if (characters == upperCaseLetter[j]) {
                hasUpper = true
                break
            }
        }
        for (let j = 0; j < upperCaseLetter.length; j++) {
            if (characters == specialCharacters[j]) {
                hasSpecial = true
                break
            }
        }
        for (let j = 0; j < numberArr.length; j++) {
            if (characters == numberArr[j]) {
                hasNumber = true
                break
            }
        }
    }
    
    if (hasLower) {
        lower.style.display = 'none'
    }
    else{
        lower.style.display  = 'block'
    }
    if (hasUpper) {
        upper.style.display = 'none'
    }
    else{
        upper.style.display  = 'block'
    }
    if (hasSpecial) {
        special.style.display = 'none'
    }
    else{
        special.style.display  = 'block'
    }
    if (hasNumber) {
        number.style.display = 'none'
    }
    else{
        number.style.display  = 'block'
    }
    if (inpValue.length >= 12) {
        letter.style.display = 'none'
    }
    else{
        letter.style.display = 'block'
    }
}
function togglePassword() {
    let inp = document.getElementById('inp');
    let eyeIcon = document.getElementById('eye-toggle');
    
    if (inp.type === 'password') {
        inp.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        inp.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}
