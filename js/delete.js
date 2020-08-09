const appendingDeleteBtnEvent = (type) => {
    let delete_btns = [...document.querySelectorAll(`.${type}-delete-icon`)];

    // console.log(delete_btns);

    delete_btns.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(type));
            arr.reverse();
            arr.splice(index, 1);
            arr.reverse();

            localStorage.setItem(type, JSON.stringify(arr));
            // console.log(arr);
            if(type === 'notes'){
                creatingNotes();
                checkingforexistence(1);
            } else if (type === 'schedules'){
                creatingSchedules();
                checkingforexistence(2);
            } else if (type === 'projects'){
                creatingProjects();
                checkingforexistence(3);
            }
        })
    })
}