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
    if (user !== null) {
        homeViewSetup();
    } else {
        loginpage.style.display = 'flex';
    }
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
    checkingfornotesinsertion();
    checkingforschedulesinsertion();
    checkingforprojectsinsertion();
}



//  fetching on the startup

const checkingfornotesinsertion = () => {
    let note = JSON.parse(localStorage.getItem('hastofetchnotes'));
    if (note === null) {
        localStorage.setItem('hastofetchnotes', JSON.stringify([]));
    } else {
        if (note.length) {
            note.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/notes', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(i === note.length-1){
                            localStorage.setItem('hastofetchnotes', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforschedulesinsertion = () => {
    let schedule = JSON.parse(localStorage.getItem('hastofetchschedules'));
    if (schedule === null) {
        localStorage.setItem('hastofetchschedules', JSON.stringify([]));
    } else {
        if (schedule.length) {
            schedule.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(i === schedule.length-1){
                            localStorage.setItem('hastofetchschedules', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforprojectsinsertion = () => {
    let project = JSON.parse(localStorage.getItem('hastofetchprojects'));
    if (project === null) {
        localStorage.setItem('hastofetchprojects', JSON.stringify([]));
    } else {
        if (project.length) {
            project.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/projects', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(i === project.length-1){
                            localStorage.setItem('hastofetchprojects', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}