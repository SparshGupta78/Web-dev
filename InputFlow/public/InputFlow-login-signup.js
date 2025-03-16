let inputFields = document.querySelectorAll('.inputField');
setInterval(() => {
    inputFields.forEach((inputField) => {
        if (inputField.value == ''){
            inputField.parentNode.querySelector('.input-delete').style.display = 'none';
        } else {
            inputField.parentNode.querySelector('.input-delete').style.display = 'flex';
        }
    });
}, 200);

let inputDeletes = document.querySelectorAll('.input-delete');
inputDeletes.forEach((inputDelete) => {
    inputDelete.addEventListener('click', () => {
        inputDelete.parentNode.querySelector('.inputField').value = '';
    });
});