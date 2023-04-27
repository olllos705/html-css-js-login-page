const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".powerlink");
const btnlink = document.querySelector('.btnlogin')



registerLink.addEventListener('click', () => {wrapper.classList.add('active')});




loginLink.addEventListener('click', () => {wrapper.classList.remove('active')});



btnlink.addEventListener('click',() =>{wrapper.classList.add('activelogin')});