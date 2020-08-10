
let originalValueThatHasToUpdate = [];

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
            }
        })
    })
}