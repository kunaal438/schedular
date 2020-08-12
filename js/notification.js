const scheduleNotification = (date, time) => {

    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let dateArr = date.split(' ');
    let month = dateArr[0];
    let year = Number(dateArr[2]);
    let today = dateArr[1].split(',');
    today.pop();
    today = Number(today[0]);
    month = months.indexOf(month.toLowerCase());

    let timeArr = time.split(':');
    let hour = timeArr[0];
    hour = Number(hour);
    let minArr = timeArr[1].split(' ');
    let min = minArr[0];
    min = Number(min);
    min = min-5;
    if(min < 0){
        min = 60 + min;
        hour = hour - 1;
    }
    let dayhalf = minArr[1];
    if(hour[0] == 0){
        hour = hour[1];
    }
    if(dayhalf == 'PM'){
        hour = Number(12+hour);
    }

    var triggerdate = new Date()
    triggerdate.setFullYear(year);
    triggerdate.setMonth(month);
    triggerdate.setDate(today);
    triggerdate.setHours(hour);
    triggerdate.setMinutes(min);
    triggerdate.setSeconds(0);

    cordova.plugins.notification.local.schedule({
        title: 'Schedule',
        text: text,
        foreground: false,
        vibrate: true,
        trigger: {at: triggerdate},
        icon: 'res://mipmap/icon.png'
    });
    // console.log(hour, min);
}

const projectNotification = (date, title) => {
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let dateArr = date.split(' ');
    let month = dateArr[0];
    let year = Number(dateArr[2]);
    let today = dateArr[1].split(',');
    today.pop();
    today = Number(today[0]);
    month = months.indexOf(month.toLowerCase());

    cordova.plugins.notification.local.schedule({
        title: 'Project Deadline',
        text: `${title} ! today is the deadline`,
        foreground: false,
        vibrate: true,
        trigger: {at: new Date(year, month, today)},
        icon: 'res://mipmap/icon.png'
    });
}