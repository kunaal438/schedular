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

    let user = JSON.parse(localStorage.getItem('user'));
    alert(user);
    if(user !== null){
        homeViewSetup();
    } else{
        loginpage.style.display = 'flex';
    }
    // fetch('http://schedular-app-438.herokuapp.com/user')
    // .then(res => res.json())
    // .then(data => {
    //     if(data.id){
    //         homeViewSetup();
    //     } else{
    //         loginpage.style.display = 'flex';
    //     }
    // })

}

window.onload = () => {
    settingUpView();
}

function homeViewSetup() {
    topbar.style.display = 'flex';
    navbar.style.display = 'flex';
    addBtn.style.display = 'block';
    let view = document.querySelector(`.${views[0]}`);
    view.classList.add('upview');
}