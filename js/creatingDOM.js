const creatingNotes = () => {
    let parentDiv = document.querySelector('.notes-view');

    let allDivs = [...document.querySelectorAll('.notes-view .notes')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('notes'));
    data.reverse();

    data.map(obj => {
        let div = document.createElement('div');
        let p = document.createElement('p');

        parentDiv.appendChild(div);
        div.appendChild(p);
        p.appendChild(document.createTextNode(obj.note));

        div.className = 'notes';
    })
}

const creatingSchedules = () => {
    let parentDiv = document.querySelector('.schedule-view');

    let allDivs = [...document.querySelectorAll('.schedule-view .schedule')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('schedules'));
    data.reverse();

    data.map(obj => {
        let div = document.createElement('div');
        let p = document.createElement('p');

        parentDiv.appendChild(div);
        div.appendChild(p);
        p.appendChild(document.createTextNode(obj.schedule));

        div.className = 'schedule';
    })
}

const creatingProjects = () => {
    let parentDiv = document.querySelector('.project-view');

    let allDivs = [...document.querySelectorAll('.project-view .project-box')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('projects'));
    data.reverse();

    data.map(obj => {
        let div = document.createElement('div');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');

        let img = document.createElement('img');
        let date = document.createElement('p');

        parentDiv.appendChild(div);
        div.appendChild(h5);
        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(date);
        h5.appendChild(document.createTextNode(obj.title));
        p.appendChild(document.createTextNode(obj.des));
        img.setAttribute('src', 'img/delete-icon.png');
        img.setAttribute('alt', 'delete icon');
        img.setAttribute('class', 'delete-icon');
        date.appendChild(document.createTextNode(`lat date :- ${obj.date}`))

        div.className = 'project-box';
        h5.className = 'project-name';
        p.className = 'project-info';
        date.className = 'last-date';
    })
}