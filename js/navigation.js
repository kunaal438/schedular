const routes = [
    "home",
    "notes",
    "schedules",
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
    'project-view',
    'todo-view'
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
        originalValueThatHasToUpdate = [];
        isForUpdate = false;
        resetTodo();
        downBarNavigation[0].click();
        if (index !== 0) {
            checkingforexistence(index);
        } else {
            let is_any_notes = JSON.parse(localStorage.getItem(`notes`));
            let is_any_schedules = JSON.parse(localStorage.getItem(`schedules`));
            let is_any_projects = JSON.parse(localStorage.getItem(`projects`));

            if ((is_any_notes === null || !is_any_notes.length) && (is_any_schedules === null || !is_any_schedules.length) && (is_any_projects === null || !is_any_projects.length)) {
                checkForEmpty(`empty inbox`);
            } else {
                removeEmptyScreen();
                homeScreenDOMCreation();
                let view = document.querySelector(`.${views[index]}`);
                view.classList.add('upview');
            }
        }


    })
})

const appendingFuncToLink = (obj, index) => {
    let link = document.querySelector(`.${obj}`);
    link.addEventListener('click', () => {
        navbarlinks.map((links, i) => {
            links.classList.remove('active');
            if (i === index + 1) {
                links.classList.add('active');
            }
        })
        routeHeader.innerHTML = `${routes[index + 1]}`;
        currentLocation = `${routes[index]}`;
        // emptyHeader.innerHTML = `${emptyInfoArr[index]}`;
        views.map(obj => {
            let view = document.querySelector(`.${obj}`);
            view.classList.remove('upview');
        })

        let view = document.querySelector(`.${views[index + 1]}`);
        view.classList.add('upview');
    })
}

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
        // console.log('yes');
        removeEmptyScreen();
    });
    scheduleForm.classList.remove('upview');
    projectForm.classList.remove('upview');
    notesForm.classList.remove('upview');
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
        removeEmptyScreen();
    })
    scheduleForm.classList.remove('upview');
    projectForm.classList.remove('upview');
    notesForm.classList.remove('upview');
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
        removeEmptyScreen();
    })
    scheduleForm.classList.remove('upview');
    projectForm.classList.remove('upview');
    notesForm.classList.remove('upview');
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
        if (item === routeHeader.innerHTML.toLowerCase()) {
            let view = document.querySelector(`.${views[i]}`);
            let is_it_empty = JSON.parse(localStorage.getItem(`${routes[i]}`));

            downBar.style.display = null;
            if (i !== 0 && !is_it_empty.length) {
                if (i === 0) {
                    checkForEmpty(`empty inbox`);
                } else {
                    checkForEmpty(`no ${routes[i]}`);
                }

            }
            else {
                removeEmptyScreen();
                homeScreenDOMCreation();
                view.classList.add('upview');
            }
            formInputsValueToNull();
            bottomBar.style.height = null;
            bottomBar.style.display = 'block';
            addBtn.style.display = 'block';
            addOpt.style.display = null;
            addOverlay.style.display = null;
            formTopBar.style.display = null;
            currentLocation = routes[i];
        }
    })

    if(isForUpdate && !todoview){
        originalValueThatHasToUpdate = [];
        isForUpdate = false;
    }

    if(todoview){
            views.map(obj => {
                let view = document.querySelector(`.${obj}`);
                view.classList.remove('upview');
            })
            downBar.style.display = 'flex';
            let view = document.querySelector(`.${views[4]}`);
            view.classList.add('upview');
            routeHeader.innerHTML = `Todo`;

            formInputsValueToNull();
            bottomBar.style.height = null;
            bottomBar.style.display = 'block';
            // addBtn.style.display = 'block';
            addOpt.style.display = null;
            addOverlay.style.display = null;
            formTopBar.style.display = null;
            currentLocation = 'todo';
    }

});

function checkingforexistence(index) {
    let is_it_empty = JSON.parse(localStorage.getItem(`${routes[index]}`));

    if (!is_it_empty.length || is_it_empty === null) {
        checkForEmpty(`no ${routes[index]}`);
    }
    else {
        removeEmptyScreen();
        let view = document.querySelector(`.${views[index]}`);
        view.classList.add('upview');
    }
}

const resetTodo = () => {
    downBar.style.display = null;
    addBtn.style.display = 'block';
    addOpt.style.display = null;
    addOverlay.style.display = null;
    isForUpdate = false;
    todoview = false;
}


let downBarNavigation = [...document.querySelectorAll('.down_bar p')];

downBarNavigation.map((item, index) => {
    item.addEventListener('click', () => {
        let head = document.querySelector('.todo-view .heading');
        let inp = document.querySelector('.todo-view .todo_input');
        if(index === 0){
            head.style.display = null;
            inp.style.display = null;
            downBarNavigation.map(obj => obj.classList.remove('active'));
            item.classList.add('active');
            createTodoStack('not-done');
        } else {
            head.style.display = 'none';
            inp.style.display = 'none';
            downBarNavigation.map(obj => obj.classList.remove('active'));
            item.classList.add('active');
            createTodoStack('done');
        }
    })
})