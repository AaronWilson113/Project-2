// handler for login function

const loginFormHandler = async (event) => {
    event.preventDefault();

    //collecting values from login form
    const userName = document.querySelector('#user_Name').value.trim();
    const password = document.querySelector('#pass_word').value.trim();

    if (userName && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();
    const currentWeight = document.querySelector('#currentWeight').value.trim();
    const goalWeight = document.querySelector('#goalWeight').value.trim();

    if ( userName && password) {
        const response = await fetch('api/user' , {
            method: 'post',
            body: JSON.stringify({ userName, password, currentWeight, goalWeight}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile')
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
    .addEventListener('submit', signupFormHandler);