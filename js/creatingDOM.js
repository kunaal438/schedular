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