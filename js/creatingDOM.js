const creatingNotes = () => {
    let parentDiv = document.querySelector('.notes-view');

    let allDivs = [...document.querySelectorAll('.notes-view .notes')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('notes'));
    data.reverse();

    data.map(obj => {
        let div = document.createElement('div');
        let leftDiv = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');

        parentDiv.appendChild(div);
        div.appendChild(leftDiv);
        leftDiv.appendChild(p);
        div.appendChild(img);
        p.appendChild(document.createTextNode(obj.note));
        img.setAttribute('src', 'img/delete-icon.png');
        img.setAttribute('alt', 'delete icon');
        img.setAttribute('class', 'notes-delete-icon');

        div.className = 'notes';
        leftDiv.className = 'left';
    })
    appendingDeleteBtnEvent('notes');
    updateEvent('notes');
}

const creatingSchedules = () => {
    let parentDiv = document.querySelector('.schedule-view');

    let allDivs = [...document.querySelectorAll('.schedule-view .schedule')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('schedules'));
    data.reverse();

    data.map(obj => {
        let div = document.createElement('div');
        let leftDiv = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');

        parentDiv.appendChild(div);
        div.appendChild(leftDiv);
        leftDiv.appendChild(p);
        div.appendChild(img);
        p.appendChild(document.createTextNode(obj.schedule));
        img.setAttribute('src', 'img/delete-icon.png');
        img.setAttribute('alt', 'delete icon');
        img.setAttribute('class', 'schedules-delete-icon');

        div.className = 'schedule';
        leftDiv.className = 'left';
    })
    appendingDeleteBtnEvent('schedules');
    updateEvent('schedules');
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
        img.setAttribute('class', 'projects-delete-icon');
        date.appendChild(document.createTextNode(`lat date :- ${obj.date}`))

        div.className = 'project-box';
        h5.className = 'project-name';
        p.className = 'project-info';
        date.className = 'last-date';
    })
    appendingDeleteBtnEvent('projects');
    updateEvent('projects');
}

const createTodoStack = () => {
    let parentDiv = document.querySelector('.project-todo');

    let allDivs = [...document.querySelectorAll('.project-todo .todo-stack')];
    allDivs.map(item => item.remove());

    let data = JSON.parse(localStorage.getItem('todo'));
    let arr = [];

    data.map(obj => {
        if (obj.title === originalValueThatHasToUpdate[0].title) {
            arr.push(obj);
        }
    })
    arr.reverse();

    if(arr.length){
        arr.map(obj => {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let btn_box = document.createElement('div');
            let del = document.createElement('img');
            let check = document.createElement('img');
    
            parentDiv.appendChild(div);
            div.appendChild(p);
            p.appendChild(document.createTextNode(obj.todo));
            div.appendChild(btn_box);
            btn_box.appendChild(del);
            btn_box.appendChild(check);
    
            del.setAttribute('src', 'img/delete-icon.png');
            del.setAttribute('class', 'delete-todo');
    
            check.setAttribute('src', 'img/check.png');
            check.setAttribute('class', 'check-todo');
    
            div.className = 'todo-stack';
        })
    }
    
    appendingDeleteBtnEvent('todo');
}