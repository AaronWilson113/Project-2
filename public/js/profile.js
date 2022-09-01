const changecurrWeightHandler = async (event) => {
    event.preventDefault();

    const currentWeight = document.querySelector('#currentWeight').value.trim();

    if (currentWeight) {
        const response = await fetch('api/user/updateCurrent', {
            method: 'put',
            body: JSON.stringify({ currentWeight}),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.currentWeight-form')
    .addEventListener('submit', changecurrWeightHandler);