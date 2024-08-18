let Name;

document.getElementById('nameForm').addEventListener('submit', (ev) => {
    ev.preventDefault()
    Name = document.getElementById('name').value
    console.log(Name)
    window.location.href = 'mainApp/index.html';
})
