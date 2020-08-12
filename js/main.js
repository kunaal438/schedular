const topbar = document.querySelector('.topbar');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    let date = new Date();
    var instances = M.Datepicker.init(elems, {
        defaultDate: date,
        setDefaultDate: true,
        disableDayFn: function(date) {
            let today = new Date();
            if(date.getMonth() > today.getMonth()){
                    return false;
            }
            else if(date.getMonth() < today.getMonth()){
                return true;
            }
            else if (date.getDate() >= today.getDate()){
                return false;
            }
            else{
                return true;
          }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, {
    });
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
    checkingforempty();
    checkforsyncing();
    let note = JSON.parse(localStorage.getItem('notes'));
    if (note !== null) {
        creatingNotes();
    } else {

    }
    let schedule = JSON.parse(localStorage.getItem('schedules'));
    if (schedule !== null) {
        creatingSchedules();
    }
    let project = JSON.parse(localStorage.getItem('projects'));
    if (project !== null) {
        creatingProjects();
    }
    // appendingDeleteBtnEvent('notes')
    // appendingDeleteBtnEvent('schedules')
    // appendingDeleteBtnEvent('projects')
}

const checkforsyncing = () => {
    checkingfornotesinsertion();
    checkingfornotesdel();
    checkingfornotesupdate();
    checkingforschedulesinsertion();
    checkingforscheduleupdate();
    checkingforscheduledel();
    checkingforprojectsinsertion();
    checkingforprojectsdel();
    checkingforprojectupdate();
    checkingfortodoinsertion();
    checkingfortododel();
}


//  fetching on the startup

const checkForEmpty = (data) => {
    const emptyView = document.querySelector('.empty-view');
    const h4 = document.querySelector('.empty-view .empty-div h4');

    h4.innerHTML = data;

    views.map(obj => {
        let view = document.querySelector(`.${obj}`);
        view.classList.remove('upview');
    })

    emptyView.classList.add('upview-empty');
    // console.log(emptyView);
}

const removeEmptyScreen = () => {
    const emptyView = document.querySelector('.empty-view');
    emptyView.classList.remove('upview-empty');
}

function checkingforempty() {
    let is_any_notes = JSON.parse(localStorage.getItem(`notes`));
    let is_any_schedules = JSON.parse(localStorage.getItem(`schedules`));
    let is_any_projects = JSON.parse(localStorage.getItem(`projects`));
    // console.log(is_any_notes);
    if (!is_any_notes.length && !is_any_schedules.length && !is_any_projects.length) {
        checkForEmpty(`empty inbox`);
    }
    else {
        removeEmptyScreen();
        homeScreenDOMCreation();
        let view = document.querySelector(`.${views[0]}`);
        view.classList.add('upview');
    }
}
