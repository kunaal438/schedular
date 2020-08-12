
const checkingfornotesinsertion = () => {
    let note = JSON.parse(localStorage.getItem('hastofetchnotes'));
    if (note === null) {
        localStorage.setItem('hastofetchnotes', JSON.stringify([]));
    } else {
        if (note.length) {
            note.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/notes', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === note.length - 1) {
                            localStorage.setItem('hastofetchnotes', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingfornotesdel = () => {
    let note = JSON.parse(localStorage.getItem('hastodelnotes'));
    if (note === null) {
        localStorage.setItem('hastodelnotes', JSON.stringify([]));
    } else {
        if (note.length) {
            note.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/del-note', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        note: obj.note,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === note.length - 1) {
                            localStorage.setItem('hastodelnotes', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingfornotesupdate = () => {
    let note = JSON.parse(localStorage.getItem('hastuopdatenotes'));
    if (note === null) {
        localStorage.setItem('hastuopdatenotes', JSON.stringify([]));
    } else {
        if (note.length) {
            note.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/update-notes', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        old_note: obj.old_note,
                        note: obj.note,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === note.length - 1) {
                            localStorage.setItem('hastopdatenotes', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingfortodoinsertion = () => {
    let todo = JSON.parse(localStorage.getItem('hastofetchtodo'));
    if (todo === null) {
        localStorage.setItem('hastofetchtodo', JSON.stringify([]));
    } else {
        if (todo.length) {
            todo.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/insert-todo', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === todo.length - 1) {
                            localStorage.setItem('hastofetchtodo', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingfortodoupdate = () => {
    let todo = JSON.parse(localStorage.getItem('hastoupdatetodo'));
    if (todo === null) {
        localStorage.setItem('hastoupdatetodo', JSON.stringify([]));
    } else {
        if (todo.length) {
            todo.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/todo-done', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        title: obj.title,
                        todo: obj.todo,
                        email: obj.email,
                    })
                })
                    .then(res => res.json)
                    .then(data => {
                        if (i === todo.length - 1) {
                            localStorage.setItem('hastoupdatetodo', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingfortododel = () => {
    let todo = JSON.parse(localStorage.getItem('hastodeltodo'));
    if (todo === null) {
        localStorage.setItem('hastodeltodo', JSON.stringify([]));
    } else {
        if (todo.length) {
            todo.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/del-todo', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        todo: obj.todo,
                        title: obj.title,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === todo.length - 1) {
                            localStorage.setItem('hastodeltodo', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforschedulesinsertion = () => {
    let schedule = JSON.parse(localStorage.getItem('hastofetchschedules'));
    if (schedule === null) {
        localStorage.setItem('hastofetchschedules', JSON.stringify([]));
    } else {
        if (schedule.length) {
            schedule.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === schedule.length - 1) {
                            localStorage.setItem('hastofetchschedules', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforscheduledel = () => {
    let schedule = JSON.parse(localStorage.getItem('hastodelschedules'));
    if (schedule === null) {
        localStorage.setItem('hastodelschedules', JSON.stringify([]));
    } else {
        if (schedule.length) {
            schedule.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/del-schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        schedule: obj.schedule,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === schedule.length - 1) {
                            localStorage.setItem('hastodelschedules', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforscheduleupdate = () => {
    let schedule = JSON.parse(localStorage.getItem('hastoupdateschedule'));
    if (schedule === null) {
        localStorage.setItem('hastoupdateschedule', JSON.stringify([]));
    } else {
        if (schedule.length) {
            schedule.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/update-schedule', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        old_schedule: obj.old_schedule,
                        old_date: obj.old_date,
                        schedule: obj.schedule,
                        date: obj.date,
                        time: obj.time,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === schedule.length - 1) {
                            localStorage.setItem('hastoupdateschedule', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforprojectsinsertion = () => {
    let project = JSON.parse(localStorage.getItem('hastofetchprojects'));
    if (project === null) {
        localStorage.setItem('hastofetchprojects', JSON.stringify([]));
    } else {
        if (project.length) {
            project.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/projects', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === project.length - 1) {
                            localStorage.setItem('hastofetchprojects', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforprojectsdel = () => {
    let project = JSON.parse(localStorage.getItem('hastodelprojects'));
    if (project === null) {
        localStorage.setItem('hastodelprojects', JSON.stringify([]));
    } else {
        if (project.length) {
            project.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/del-project', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        title: obj.title,
                        email: obj.email,
                        des: obj.des
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === project.length - 1) {
                            localStorage.setItem('hastodelprojects', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}

const checkingforprojectupdate = () => {
    let project = JSON.parse(localStorage.getItem('hastoupdateprojects'));
    if (project === null) {
        localStorage.setItem('hastoupdateprojects', JSON.stringify([]));
    } else {
        if (project.length) {
            project.map((obj, i) => {
                fetch('http://schedular-app-438.herokuapp.com/update-project', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        old_title: obj.old_title,
                        title: obj.title,
                        date: obj.date,
                        des: obj.des,
                        email: obj.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (i === project.length - 1) {
                            localStorage.setItem('hastoupdateprojects', JSON.stringify([]));
                        }
                    })
                    .catch(err => console.log(err));
            })
        }
    }
}