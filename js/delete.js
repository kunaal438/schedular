const appendingDeleteBtnEvent = (type) => {
    let delete_btns;
    if (type === 'todo') {
        delete_btns = [...document.querySelectorAll(`.delete-todo`)];
    }
    else {
        delete_btns = [...document.querySelectorAll(`.${type}-delete-icon`)];
    }


    console.log(delete_btns);

    delete_btns.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(type));
            let delArr = [];
            let sortedArr = [];

            if (type === 'todo') {
                arr = arr.filter(obj => {
                    if (obj.title === originalValueThatHasToUpdate[0].title) {
                        sortedArr.push(obj);
                    } else {
                        return obj;
                    }
                })
                sortedArr.reverse();
                delArr.push(sortedArr[index]);
                sortedArr.splice(index, 1);
                sortedArr.reverse();
                sortedArr.map(obj => {
                    arr.push(obj);
                })
            } else {
                arr.reverse();
                delArr.push(arr[index]);
                arr.splice(index, 1);
                arr.reverse();
            }

            localStorage.setItem(type, JSON.stringify(arr));
            // console.log(arr);
            // console.log(delArr[0]);
            if (type === 'notes') {
                let data = {
                    note: delArr[0].note,
                    email: delArr[0].email
                };
                fetch('http://schedular-app-438.herokuapp.com/del-note', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelnotes'));
                        a.push(data)
                        localStorage.setItem('hastodelnotes', JSON.stringify(a));
                    })
                // .then(success => console.log(true));
                creatingNotes();
                checkingforexistence(1);
            } else if (type === 'schedules') {
                let data = {
                    schedule: delArr[0].schedule,
                    email: delArr[0].email
                }
                fetch('http://schedular-app-438.herokuapp.com/del-schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelschedules'));
                        a.push(data)
                        localStorage.setItem('hastodelschedules', JSON.stringify(a));
                    })
                // .then(success => console.log(true));
                creatingSchedules();
                checkingforexistence(2);
            } else if (type === 'projects') {
                let data = {
                    title: delArr[0].title,
                    email: delArr[0].email,
                    des: delArr[0].des
                };
                fetch('http://schedular-app-438.herokuapp.com/del-project', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    // .then(success => console.log(true));
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelprojects'));
                        a.push(data)
                        localStorage.setItem('hastodelprojects', JSON.stringify(a));
                    })
                let storage = JSON.parse(localStorage.getItem('todo'));
                let arr = [];
                storage.map(item => {
                    if (item.title !== delArr[0].title) {
                        arr.push(item);
                    }
                })

                localStorage.setItem('todo', JSON.stringify(arr));
                creatingProjects();
                checkingforexistence(3);
            } else if (type === 'todo') {
                let data = {
                    todo: delArr[0].todo,
                    title: delArr[0].title,
                    email: delArr[0].email
                };
                fetch('http://schedular-app-438.herokuapp.com/del-todo', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodeltodo'));
                        a.push(data)
                        localStorage.setItem('hastodeltodo', JSON.stringify(a));
                    })
                // .then(success => console.log(true));
                createTodoStack();
            }
        })
    })
}

const appendingHomeDeleteBtnEvent = (type) => {
    let split = type.split('-');
    let delete_btns = [...document.querySelectorAll(`.${type}-delete-icon`)];

    delete_btns.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(split[1]));
            let delArr = [];

            arr.reverse();
            delArr.push(arr[index]);
            arr.splice(index, 1);
            arr.reverse();

            localStorage.setItem(split[1], JSON.stringify(arr));
            
            if (split[1] === 'notes') {
                let data = {
                    note: delArr[0].note,
                    email: delArr[0].email
                };
                fetch('http://schedular-app-438.herokuapp.com/del-note', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelnotes'));
                        a.push(data)
                        localStorage.setItem('hastodelnotes', JSON.stringify(a));
                    })
                // .then(success => console.log(true));
                checkingforempty();
            } else if (split[1] === 'schedules') {
                let data = {
                    schedule: delArr[0].schedule,
                    email: delArr[0].email
                }
                fetch('http://schedular-app-438.herokuapp.com/del-schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelschedules'));
                        a.push(data)
                        localStorage.setItem('hastodelschedules', JSON.stringify(a));
                    })
                // .then(success => console.log(true));
                checkingforempty();
            } else if (split[1] === 'projects') {
                let data = {
                    title: delArr[0].title,
                    email: delArr[0].email,
                    des: delArr[0].des
                };
                fetch('http://schedular-app-438.herokuapp.com/del-project', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    // .then(success => console.log(true));
                    .catch(err => {
                        let a = JSON.parse(localStorage.getItem('hastodelprojects'));
                        a.push(data)
                        localStorage.setItem('hastodelprojects', JSON.stringify(a));
                    })
                let storage = JSON.parse(localStorage.getItem('todo'));
                let arr = [];
                storage.map(item => {
                    if (item.title !== delArr[0].title) {
                        arr.push(item);
                    }
                })

                localStorage.setItem('todo', JSON.stringify(arr));
                checkingforempty();
            }
        })
    })
}