// handler for login function

const loginFormHandler = async (event) => {
    event.preventDefault();

    //collecting values from login form
    const username = document.querySelector('#user_Name').value.trim();
    const password = document.querySelector('#pass_word').value.trim();

    if (username && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
            console.log('error');
        }
    }
};

const signupFormHanlder = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    if ( userName && password) {
        const response = await fetch('api/user' , {
            method: 'post',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
            console.log('error');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHanlder);