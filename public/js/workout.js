const workoutFormHandler = async (event) => {
    event.preventDefault();

    //collecting values from login form
    const workoutName = document.querySelector('#workoutName').value.trim();
    const exOne = document.querySelector('#exOne').value.trim();
    const exTwo = document.querySelector('#exTwo').value.trim();
    const exThree = document.querySelector('#exThree').value.trim();
    const exFour = document.querySelector('#exFour').value.trim();
    const exFive = document.querySelector('#exFive').value.trim();

    if (workoutName) {
        const response = await fetch('api/workout/post', {
            method: 'POST',
            body: JSON.stringify({ workoutName, exOne, exTwo, exThree, exFour, exFive}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.workout-form')
    .addEventListener('submit', workoutFormHandler);