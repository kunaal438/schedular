const appendingDeleteBtnEvent = (type) => {
    let delete_btns;
    if(type === 'todo') {
        delete_btns = [...document.querySelectorAll(`.delete-todo`)];
    } else{
        delete_btns = [...document.querySelectorAll(`.${type}-delete-icon`)];
    }
    

    // console.log(delete_btns);

    delete_btns.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(type));
            let delArr = [];
            arr.reverse();
            delArr.push(arr[index]);
            arr.splice(index, 1);
            arr.reverse();

            localStorage.setItem(type, JSON.stringify(arr));
            // console.log(arr);
            // console.log(delArr[0]);
            if(type === 'notes'){
                fetch('http://schedular-app-438.herokuapp.com/del-note', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        note: delArr[0].note,
                        email: delArr[0].email
                    })
                })
                .then(res => res.json())
                // .then(success => console.log(true));
                creatingNotes();
                checkingforexistence(1);
            } else if (type === 'schedules'){
                fetch('http://schedular-app-438.herokuapp.com/del-schedules', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        schedule: delArr[0].schedule,
                        email: delArr[0].email
                    })
                })
                .then(res => res.json())
                // .then(success => console.log(true));
                creatingSchedules();
                checkingforexistence(2);
            } else if (type === 'projects'){
                fetch('http://schedular-app-438.herokuapp.com/del-project', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        title: delArr[0].title,
                        email: delArr[0].email,
                        des: delArr[0].des
                    })
                })
                .then(res => res.json())
                // .then(success => console.log(true));
                creatingProjects();
                checkingforexistence(3);
            } else if (type === 'todo'){
                fetch('http://schedular-app-438.herokuapp.com/del-todo', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        todo: delArr[0].todo,
                        title: delArr[0].title,
                        email: delArr[0].email
                    })
                })
                .then(res => res.json())
                // .then(success => console.log(true));
                createTodoStack();
            }
        })
    })
}