
let originalValueThatHasToUpdate = [];

// let todoView = document.querySelector('.todo-view');
let downBar = document.querySelector('.down_bar');

const updateEvent = (type) => {
    let stacks;
    if (type === 'notes') {
        stacks = [...document.querySelectorAll(`.notes-view .notes .left`)];
    } else if (type === 'schedules') {
        stacks = [...document.querySelectorAll(`.schedule-view .schedule .left`)];
    } else {
        stacks = [...document.querySelectorAll(`.project-view .project-box`)];
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
            originalValueThatHasToUpdate = [updateArr[0], index];
            if (type === 'notes') {
                noteFormLink.click();
                addOpt.classList.toggle('display');
                addOverlay.classList.toggle('display');
                isForUpdate = true;
                noteForm.innerHTML = updateArr[0].note;
                noteForm.value = updateArr[0].note;
            } else if (type === 'schedules') {
                scheduleFormLink.click();
                addOpt.classList.toggle('display');
                addOverlay.classList.toggle('display');
                isForUpdate = true;
                schedule.value = updateArr[0].schedule;
                scheduleDate.value = updateArr[0].schedule_date || updateArr[0].date;
                scheduleTime.value = updateArr[0].schedule_time || updateArr[0].time;
            } else if (type === 'projects') {
                views.map(obj => {
                    let view = document.querySelector(`.${obj}`);
                    view.classList.remove('upview');
                })
                let view = document.querySelector(`.${views[4]}`);
                view.classList.add('upview');
                downBar.style.display = 'flex';
                currentLocation = 'todo';
                addBtn.style.display = 'none';
                routeHeader.innerHTML = `Todo`;
                let title = document.querySelector('.project-todo .title');
                // console.log(title.innerHTML);
                title.innerHTML = originalValueThatHasToUpdate[0].title;
                createTodoStack();


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

                    if(inputValue.value.length){
                        // console.log(true);

                        let data = {
                            todo: inputValue.value,
                            title: originalValueThatHasToUpdate[0].title,
                            email: user.email,
                            status: 'not-done' 
                        }

                        fetch('http://schedular-app-438.herokuapp.com/insert-todo', {
                            method: 'post',
                            headers: new Headers({ 'Content-Type': 'application/json'}),
                            body: JSON.stringify(data)
                        })
                        .then(res => res.json())
                        .catch(err => {
                            let arr = JSON.parse(localStorage.getItem('hastofetchtodo'));
                            arr.push(data);
                            localStorage.setItem('hastofetchtodo', JSON.stringify(arr));
                        })

                        addingDataToLocalStorage('todo', data);
                        createTodoStack();
                        inputValue.value = '';
                    } else{
                        console.log(false);
                    }
                })
            }
        })
    })
}