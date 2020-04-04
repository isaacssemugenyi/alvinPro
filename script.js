"use strict";
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errormsg = document.querySelector('.error');
const check = document.querySelector('#show');

form.addEventListener('submit', (e) => {
  let messages = []
  //let regex = /[a-z][0-9]/gi;
  if(!username.value || name.value === null){
    messages.push('Name is required')
  }
  if(username.value.length <= 3) {
    messages.push('Username must be longer than 3 charracters');
  }
  if(username.value.length >= 20) {
    messages.push('Username should not exceed 20 charracters');
  }
  if(password.value.length <= 6) {
    messages.push('Password must be longer than 6 charracters');
  }
  if(password.value.length >= 20) {
    messages.push('Password must be less than 20 charracters');
  }
  if(password.value === 'password') {
    messages.push('Password should not be set password');
  }
  // if(regex.test(password.value)){
  //   messages.push('Password must contain a symbol, character and letter')
  // }
  if(messages.length > 0){
    e.preventDefault();
    errormsg.innerText = messages.join(' , ');
    username.classList.add('error-style');
    password.classList.add('error-style');
  }
})
