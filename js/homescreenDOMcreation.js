
const homeScreenDOMCreation = () => {
    let parentDiv = document.querySelector('.home-view');
    parentDiv.innerHTML = '';

    let total_space_occupied = 0;

    let all_notes = JSON.parse(localStorage.getItem('notes'));

    if (all_notes !== null) {
        total_space_occupied = 2;
        let title = document.createElement('h5');
        parentDiv.appendChild(title);
        title.appendChild(document.createTextNode('Notes..'));
        title.className = 'note-title';
        all_notes.reverse();
        
        for (let i = 0; i < 2; i++) {
            if (all_notes[i] !== undefined) {
                let div = document.createElement('div');
                let p = document.createElement('p');

                parentDiv.appendChild(div);
                div.appendChild(p);
                p.appendChild(document.createTextNode(all_notes[i].note));

                div.className = 'notes';
            }
        }
    }

    let all_schedules = JSON.parse(localStorage.getItem('schedules'));

    if (all_schedules !== null) {
        let title = document.createElement('h5');
        parentDiv.appendChild(title);
        title.appendChild(document.createTextNode('schedules..'));
        title.className = 'schedule-title';
        let loopIntervals = 2;
        if (total_space_occupied === 0) {
            loopIntervals = 3;
            total_space_occupied = 3;
        } else {
            total_space_occupied = 2;
        }
        all_schedules.reverse();
        for (let i = 0; i < loopIntervals; i++) {
            if (all_schedules[i] !== undefined) {
                let div = document.createElement('div');
                let p = document.createElement('p');

                parentDiv.appendChild(div);
                div.appendChild(p);
                p.appendChild(document.createTextNode(all_schedules[i].schedule));

                div.className = 'schedule';
            }
        }
    }

    let all_projects = JSON.parse(localStorage.getItem('projects'));

    if (all_projects !== null) {
        let title = document.createElement('h5');
        parentDiv.appendChild(title);
        title.appendChild(document.createTextNode('projects..'));
        title.className = 'project-title';
        let loopIntervals = 1;
        if (total_space_occupied === 0) {
            loopIntervals = 2;
            total_space_occupied = 2;
        } else {
            total_space_occupied = 1;
        }
        all_projects.reverse();
        for (let i = 0; i < loopIntervals; i++) {
            if (all_projects[i] !== undefined) {
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
                h5.appendChild(document.createTextNode(all_projects[i].title));
                p.appendChild(document.createTextNode(all_projects[i].des));
                img.setAttribute('src', 'img/delete-icon.png');
                img.setAttribute('alt', 'delete icon');
                img.setAttribute('class', 'delete-icon');
                date.appendChild(document.createTextNode(`lat date :- ${all_projects[i].date}`))

                div.className = 'project-box';
                h5.className = 'project-name';
                p.className = 'project-info';
                date.className = 'last-date';
            }
        }
    }
}