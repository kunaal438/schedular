const checkBtn = document.querySelector('.tick');

checkBtn.addEventListener('click', () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (currentLocation.includes('note')) {
        const noteForm = document.querySelector('.notes-area').value;
        if (noteForm.length) {
            let data = {
                note: noteForm,
                email: user.email
            }
            fetch('http://schedular-app-438.herokuapp.com/notes', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .catch(err => {
                    let arr = JSON.parse(localStorage.getItem('hastofetchnotes'));
                    arr.push(data);
                    localStorage.setItem('hastofetchnotes', JSON.stringify(arr));
                });
            
                addingDataToLocalStorage('notes', data);
                creatingNotes();
                navigateToViewAfterCreating(navbarlinks[1], 1);
        }
    } else if (currentLocation.includes('schedule')) {
        const schedule = document.querySelector('#schedule').value;
        const date = document.querySelector('#schedule-date').value;
        const time = document.querySelector('#schedule-time').value;

        if(schedule.length && date.length && time.length){
            let data = {
                schedule: schedule,
                date: date,
                time: time,
                email: user.email
            }
            fetch('http://schedular-app-438.herokuapp.com/schedules', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .catch(err => {
                    let arr = JSON.parse(localStorage.getItem('hastofetchschedules'));
                    arr.push(data);
                    localStorage.setItem('hastofetchschedules', JSON.stringify(arr));
                });
                addingDataToLocalStorage('schedules', data);
                creatingSchedules();
                navigateToViewAfterCreating(navbarlinks[2], 2);
        }
    } else if(currentLocation.includes('project')){
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const date = document.querySelector('#date').value;

        if(title.length && description.length && date.length){
            let data = {
                title: title,
                date: date,
                des: description,
                email: user.email
            };
            fetch('http://schedular-app-438.herokuapp.com/projects', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .catch(err => {
                    let arr = JSON.parse(localStorage.getItem('hastofetchprojects'));
                    arr.push(data);
                    localStorage.setItem('hastofetchprojects', JSON.stringify(arr));
                })
                addingDataToLocalStorage('projects', data);
                creatingProjects();
                navigateToViewAfterCreating(navbarlinks[3], 3);
        }
    }
})


const addingDataToLocalStorage = (key, data) => {
    let stored_data = JSON.parse(localStorage.getItem(key)); // [  { data } ]

    if(stored_data !== null){
        stored_data.push(data);

        localStorage.setItem(key, JSON.stringify(stored_data));
    } else{
        localStorage.setItem(key, JSON.stringify([data]));
    }
}

const navigateToViewAfterCreating = (item, index) => {
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
    
    bottomBar.style.height = null;
            bottomBar.style.display = 'block';
            addBtn.style.display = 'block';
            addOpt.style.display = null;
            addOverlay.style.display = null;
            formTopBar.style.display = null;

    let view = document.querySelector(`.${views[index]}`);
    view.classList.add('upview');
}