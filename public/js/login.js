// handler for login function

const loginFormHandler = async (event) => {
    event.preventDefault();

    //collecting values from login form
    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            console.log('ok')
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHanlder = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    if ( username && password) {
        const response = await fetch('api/' , {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            console.log('ok');
        } else {
            alert(response.statusText)
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);