var form = document.querySelector('#form');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    var fname= document.querySelector('#fname').value;
    var lname= document.querySelector('#lname').value;
    
    const Person={
        fname,
        lname,
    };
    if (localStorage.getItem('users') === null) {
        var users = [];
        users.push(Person);
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        var storedUsers = JSON.parse(localStorage.getItem('users'));
        storedUsers.push(Person);
        localStorage.setItem('users', JSON.stringify(storedUsers));
      }
}


