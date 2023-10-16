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

      showUsers();
}

function showUsers() {
    var users = JSON.parse(localStorage.getItem('users'));
    var usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    if (users !== null) {
      users.forEach(function (Person, index) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(Person.fname + '  ' + Person.lname));

        var deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('X'));
        deleteBtn.onclick = function () {
          deleteUser(index);
        };
        li.appendChild(deleteBtn);

        usersList.appendChild(li);
      });
    }
  }

  function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem('users'));
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    showUsers();
  }
  showUsers();
