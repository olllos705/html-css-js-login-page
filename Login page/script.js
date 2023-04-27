const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLink = document.querySelector('.btn-login-pop-up')



registerLink.addEventListener('click', () => {wrapper.classList.add('active');
});



loginLink.addEventListener('click', () => {wrapper.classList.remove('active');
});

btnLink.addEventListener('click', () => {wrapper.classList.add('activepopup');
});
