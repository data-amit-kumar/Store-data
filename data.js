var form = document.querySelector('#form');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    var fname= document.querySelector('#fname').value;
    var lname= document.querySelector('#lname').value;
    
    var Person= (fname+ " "+ lname);

    localStorage.setItem('name',(Person));
}


