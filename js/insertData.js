const checkBtn = document.querySelector('.tick');

checkBtn.addEventListener('click', () => {
    if (currentLocation.includes('note')) {
        const noteForm = document.querySelector('.notes-area').value;
        if (noteForm.length) {
            fetch('http://localhost:3000/notes', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    note: noteForm
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.id) {
                        // fetch('/all-notes')
                        // .then(res => res.json())
                        // .then(data => {
                            
                        // });
                        // to do store note to local

                        alert('success');
                    } else {
                        alert('err')
                    }
                })
        }
    } else if (currentLocation.includes('schedule')) {
        const schedule = document.querySelector('#schedule').value;
        const date = document.querySelector('#schedule-date').value;
        const time = document.querySelector('#schedule-time').value;

        if(schedule.length && date.length && time.length){
            fetch('http://localhost:3000/schedules', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    schedule: schedule,
                    date: date,
                    time: time
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.id) {
                        
                        // to do store schedule to local

                        alert('success');

                        // have to set local notification
                    } else {
                        alert('err')
                    }
                })
        }
    } else if(currentLocation.includes('project')){
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const date = document.querySelector('#date').value;

        if(title.length && description.length && date.length){
            fetch('http://localhost:3000/projects', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    title: title,
                    date: date,
                    des: description
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.id) {
                        
                        // to do store project to local

                        alert('success');

                        // have to set local notification
                    } else {
                        alert('err')
                    }
                })
        }
    }
})