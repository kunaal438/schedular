const topbar = document.querySelector('.topbar');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    let date = new Date();
    var instances = M.Datepicker.init(elems, {
        defaultDate: date.getDate()
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems);
});

const settingUpView = () => {
    // let login = JSON.stringify(localStorage.getItem('user'));
    // if(login.id){
    //     homeViewSetup();
    //     alert('user is in local storage');
    // } else{
    //     loginpage.style.display = 'flex';
    //     alert('user is not in local storage');
    // }
    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then(data => {
        if(data.id){
            homeViewSetup();
        } else{
            loginpage.style.display = 'flex';
        }
    })
}

window.onload = () => {
    settingUpView();
}

document.addEventListener("deviceready", deviceReadyFunc, false);

const deviceReadyFunc = () => {
    settingUpView();
}

function homeViewSetup() {
    topbar.style.display = 'flex';
    navbar.style.display = 'flex';
    addBtn.style.display = 'block';
    let view = document.querySelector(`.${views[0]}`);
    view.classList.add('upview');
}
