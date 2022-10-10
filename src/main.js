
const button = document.getElementById('button');
const prevent = document.getElementById('email_validation');

function action(event){
    event.preventDefault();
    const input = document.getElementById('input');

    let value = input.value;

    if (value === '' || value.includes('@') === false){
        input.classList.add('invalidemail');
        prevent.style.visibility = 'visible';
    }else{
        input.classList.remove('invalidemail');
        prevent.style.visibility = 'hidden';
    }
}

button.addEventListener('click', action);