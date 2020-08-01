const routes = [
    "home",
    "notes",
    "schedule",
    "projects"
];

const emptyInfoArr = [
    "empty inbox",
    "no notes",
    "no schedules yet",
    "zero ongoin projects"
];

const views = [
    'home-view',
    'notes-view',
    'schedule-view',
    'project-view'
];

const linksArr = [
    "notes-link",
    "schedule-link",
    "project-link"
];

let currentLocation = 'home';

const noteFormLink = document.querySelector('.notes-link-for-form');
const scheduleFormLink = document.querySelector('.schedule-link-for-form');
const projectFormLink = document.querySelector('.project-link-for-form');
const bottomBar = document.querySelector('.navbar');
const formTopBar = document.querySelector('.check-form');

const backFromForm = document.querySelector('.back-btn');

const notesForm = document.querySelector('.notes-form');
const scheduleForm = document.querySelector('.schedule-form');
const projectForm = document.querySelector('.project-form');

const navbarlinks = [...document.querySelectorAll('.navbar .items .links')];
const routeHeader = document.querySelector('.currentRoute');
const formNavigate = document.querySelector('.form-title');
const emptyHeader = document.querySelector('.empty-div h4');

navbarlinks.map((item, index) => {
    item.addEventListener('click', () => {
        navbarlinks.map(link => {
            link.classList.remove('active');
        })
        item.classList.add('active');
        routeHeader.innerHTML = `${routes[index]}`;
        currentLocation = `${routes[index]}`;
        // emptyHeader.innerHTML = `${emptyInfoArr[index]}`;
        views.map(obj => {
            let view = document.querySelector(`.${obj}`);
            view.classList.remove('upview');
        })
        
        let view = document.querySelector(`.${views[index]}`);
        view.classList.add('upview');
    })
})

linksArr.map((obj, index) => {
    let link = document.querySelector(`.${obj}`);
    link.addEventListener('click', () => {
        navbarlinks.map((links, i) => {
            links.classList.remove('active');
            if(i === index+1){
                links.classList.add('active');
            }
        })
        routeHeader.innerHTML = `${routes[index+1]}`;
        currentLocation = `${routes[index]}`;
        // emptyHeader.innerHTML = `${emptyInfoArr[index]}`;
        views.map(obj => {
            let view = document.querySelector(`.${obj}`);
            view.classList.remove('upview');
        })
        
        let view = document.querySelector(`.${views[index+1]}`);
        view.classList.add('upview');
    })
})

noteFormLink.addEventListener('click', () => {
    bottomBar.style.height = `0px`;
    bottomBar.style.display = 'none';
    addBtn.style.display = 'none';
    addOpt.style.display = 'none';
    addOverlay.style.display = 'none';
    formTopBar.style.display = 'flex';
    views.map(obj => {
        let view = document.querySelector(`.${obj}`);
        view.classList.remove('upview');
    })
    addOpt.classList.toggle('display');
    addOverlay.classList.toggle('display');
    notesForm.classList.add('upview');
    currentLocation = 'notes-form';
    formNavigate.innerHTML = 'notes';
});

scheduleFormLink.addEventListener('click', () => {
    bottomBar.style.height = `0px`;
    bottomBar.style.display = 'none';
    addBtn.style.display = 'none';
    addOpt.style.display = 'none';
    addOverlay.style.display = 'none';
    formTopBar.style.display = 'flex';
    views.map(obj => {
        let view = document.querySelector(`.${obj}`);
        view.classList.remove('upview');
    })
    addOpt.classList.toggle('display');
    addOverlay.classList.toggle('display');
    scheduleForm.classList.add('upview');
    currentLocation = 'schedule-form';
    formNavigate.innerHTML = 'schedule';
});

projectFormLink.addEventListener('click', () => {
    bottomBar.style.height = `0px`;
    bottomBar.style.display = 'none';
    addBtn.style.display = 'none';
    addOpt.style.display = 'none';
    addOverlay.style.display = 'none';
    formTopBar.style.display = 'flex';
    views.map(obj => {
        let view = document.querySelector(`.${obj}`);
        view.classList.remove('upview');
    })
    addOpt.classList.toggle('display');
    addOverlay.classList.toggle('display');
    projectForm.classList.add('upview');
    currentLocation = 'project-form';
    formNavigate.innerHTML = 'project';
});

backFromForm.addEventListener('click', () => {
    let currentView = document.querySelector(`.${currentLocation}`);

    currentView.classList.remove('upview');

    routes.map((item, i) => {
        if(item === routeHeader.innerHTML.toLowerCase()){            
            let view = document.querySelector(`.${views[i]}`);
            view.classList.add('upview');
            bottomBar.style.height = null;
            bottomBar.style.display = 'block';
            addBtn.style.display = 'block';
            addOpt.style.display = null;
            addOverlay.style.display = null;
            formTopBar.style.display = null;
            currentLocation = routes[i];
        }
    })
});