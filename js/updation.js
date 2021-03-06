
let originalValueThatHasToUpdate = [];

// let todoView = document.querySelector('.todo-view');
let downBar = document.querySelector('.down_bar');
let todoview = false;

const updateEvent = (type) => {
    let stacks;
    if (type === 'notes') {
        stacks = [...document.querySelectorAll(`.notes-view .notes div`)];
    } else if (type === 'schedules') {
        stacks = [...document.querySelectorAll(`.schedule-view .schedule div`)];
    } else {
        stacks = [...document.querySelectorAll(`.project-view .project-box div`)];
    }

    if (type === 'home-notes') {
        stacks = [...document.querySelectorAll(`.home-view .notes div`)];
        type = 'notes';
    } else if (type === 'home-schedules') {
        stacks = [...document.querySelectorAll(`.home-view .schedule div`)];
        type = 'schedules';
    } else if (type === 'home-projects') {
        stacks = [...document.querySelectorAll(`.home-view .project-box div`)];
        type = 'projects';
    }

    // console.log(stacks);
    stacks.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(type));
            let updateArr = [];
            arr.reverse();
            updateArr.push(arr[index]);
            // arr.splice(index, 1);
            arr.reverse();
            // console.log(index);

            if (type === 'notes') {
                noteFormLink.click();
                originalValueThatHasToUpdate = [updateArr[0], index];
                addOpt.classList.toggle('display');
                addOverlay.classList.toggle('display');
                isForUpdate = true;
                noteForm.innerHTML = updateArr[0].note;
                noteForm.value = updateArr[0].note;
            } else if (type === 'schedules') {
                scheduleFormLink.click();
                originalValueThatHasToUpdate = [updateArr[0], index];
                addOpt.classList.toggle('display');
                addOverlay.classList.toggle('display');
                isForUpdate = true;
                schedule.value = updateArr[0].schedule;
                scheduleDate.value = updateArr[0].schedule_date || updateArr[0].date;
                scheduleTime.value = updateArr[0].schedule_time || updateArr[0].time;
            } else if (type === 'projects') {

                originalValueThatHasToUpdate = [updateArr[0], index];
                views.map(obj => {
                    let view = document.querySelector(`.${obj}`);
                    view.classList.remove('upview');
                })
                let title = document.querySelector('.project-todo .title');
                title.innerHTML = originalValueThatHasToUpdate[0].title;
                let view = document.querySelector(`.${views[4]}`);
                view.classList.add('upview');
                downBar.style.display = 'flex';
                currentLocation = 'todo';
                addBtn.style.display = 'none';
                routeHeader.innerHTML = `Todo`;
                // console.log(title.innerHTML);
                createTodoStack('not-done');
                todoview = true;


                // todo_function

                let setting = document.querySelector('.todo-view .heading img');

                setting.addEventListener('click', () => {
                    projectFormLink.click();
                    addOpt.classList.toggle('display');
                    addOverlay.classList.toggle('display');

                    downBar.style.display = null;
                    isForUpdate = true;
                    project_title.value = originalValueThatHasToUpdate[0].title;
                    project_des.value = originalValueThatHasToUpdate[0].des;
                    project_date.value = originalValueThatHasToUpdate[0].date;
                })

                let addTodoBtn = document.querySelector('.todo_input div');
                let user = JSON.parse(localStorage.getItem('user'));

                addTodoBtn.addEventListener('click', () => {
                    // console.log('click');
                    let inputValue = document.querySelector('.todo_input input');

                    if (inputValue.value.length) {
                        // console.log(true);

                        let data = {
                            todo: inputValue.value,
                            title: originalValueThatHasToUpdate[0].title,
                            email: user.email,
                            status: 'not-done'
                        }

                        fetch('http://schedular-app-438.herokuapp.com/insert-todo', {
                            method: 'post',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .catch(err => {
                                let arr = JSON.parse(localStorage.getItem('hastofetchtodo'));
                                arr.push(data);
                                localStorage.setItem('hastofetchtodo', JSON.stringify(arr));
                            })

                        addingDataToLocalStorage('todo', data);
                        createTodoStack('not-done');
                        inputValue.value = '';
                    } else {
                        console.log(false);
                    }
                })
            }
        })
    })
}

const doneTodoEvent = () => {
    let all_checks = [...document.querySelectorAll('.todo-stack div .check-todo')];

    // console.log(all_checks);
    all_checks.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem('todo'));
            let sortArr = [];

            arr = arr.filter(obj => {
                if (obj.title === originalValueThatHasToUpdate[0].title) {
                    if (obj.status === 'not-done') {
                        sortArr.push(obj);
                    } else {
                        return obj;
                    }
                } else {
                    return obj;
                }
            })
            sortArr.reverse();
            sortArr[index].status = 'done';
            sortArr.reverse();
            // console.log(sortArr);    
            sortArr.map(obj => arr.push(obj))
            localStorage.setItem('todo', JSON.stringify(arr));

            fetch('http://schedular-app-438.herokuapp.com/todo-done', {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    title: sortArr[index].title,
                    todo: sortArr[index].todo,
                    email: sortArr[index].email,
                })
            })
                .then(res => res.json)
                .catch(err => {
                    let a = JSON.parse(localStorage.getItem('hastoupdatetodo'));
                    a.push(data)
                    localStorage.setItem('hastoupdatetodo', JSON.stringify(a));
                });

            createTodoStack('not-done');
        })
    })
}