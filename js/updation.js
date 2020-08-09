
let originalValueThatHasToUpdate = [];

const updateEvent = (type) => {
    let stacks;
    if(type === 'notes'){
        stacks = [...document.querySelectorAll(`.notes-view .notes .left`)];
    } else if (type === 'schedules'){
        stacks = [...document.querySelectorAll(`.schedule-view .schedule`)];
    } else{
        stacks = [...document.querySelectorAll(`.project-view .project-box`)];
    }  

    // console.log(stacks);
    stacks.map((item, index) => {
        item.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem(type));
            let updateArr = [];
            arr.reverse();
            updateArr.push(arr[index]);
            arr.splice(index, 1);
            arr.reverse();
            // console.log(index);
            noteFormLink.click();
            addOpt.classList.toggle('display');
            addOverlay.classList.toggle('display');
            isForUpdate = true;
            originalValueThatHasToUpdate = [updateArr[0], index];
            noteForm.innerHTML = updateArr[0].note;
        })
    })
}