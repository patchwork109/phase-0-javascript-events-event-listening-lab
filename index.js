const input = document.getElementById('button');
// grabbing the id another way
// const input = document.querySelector('#button');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

