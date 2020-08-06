
const homeScreenDOMCreation = () => {
    let parentDiv = document.querySelector('.home-view');
    parentDiv.innerHTML = ''

    let all_notes = JSON.parse(localStorage.getItem('notes'));

    if (all_notes !== null || all_notes.length) {
        let title = document.createElement('h5');
        parentDiv.appendChild(title);
        title.appendChild(document.createTextNode('Notes..'));
        title.className = 'note-title';

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
}