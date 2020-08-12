// loading screen
const loading = document.querySelector('.loading');

// varliables decrations

const loginlink = document.querySelector('.loginLink');
const registerlink = document.querySelector('.registerLink');

// views declaration

const loginpage = document.querySelector('.login-page');
const registerpage = document.querySelector('.register-page');

// register and login form routing

loginlink.addEventListener('click', () => {
    loginpage.style.display = 'flex';
    registerpage.style.display = 'none';
})

registerlink.addEventListener('click', () => {
    registerpage.style.display = 'flex';
    loginpage.style.display = 'none';
})

// register handlers  //////////////

// variables related to register form

const registerBtn = document.querySelector('.submitregisterBtn');

// err box
const usernameErr = document.querySelector('#username-err');
const emailErr = document.querySelector('#email-err');
const passwordErr = document.querySelector('#password-err');


const username = document.querySelector('#username').value;
const email = document.querySelector('#registeremail').value;
const password = document.querySelector('#registerpassword').value;

registerBtn.addEventListener('click', () => {

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#registeremail').value;
    const password = document.querySelector('#registerpassword').value;

    if (username.length < 3) {
        usernameErr.innerHTML = "username must be of 3 characters atleast";
    } else {
        usernameErr.innerHTML = "";
    }

    if (!email.length) {
        emailErr.innerHTML = "enter email!!!!";
    } else if (!email.includes('@') || !email.includes('.')) {
        emailErr.innerHTML = "email is invalid";
    } else {
        emailErr.innerHTML = "";
    }

    if (password.length < 8) {
        passwordErr.innerHTML = "password must be atleast 8 characters long!!!!"
    } else {
        passwordErr.innerHTML = "";
    }

    if (passwordErr.innerHTML === "" && emailErr.innerHTML === "" && usernameErr.innerHTML === "") {
        loading.style.display = 'flex';

        fetch('http://schedular-app-438.herokuapp.com/register', {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                username: username,
                email: email,
                hash: password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    // alert('registered succesfully');

                    localStorage.setItem('user', JSON.stringify(data));
                    isloggedIn = true;
                    loginpage.style.display = null;
                    registerpage.style.display = null;
                    loading.style.display = null;

                    homeViewSetup();
                } else {
                    // alert('fail to register');
                    loading.style.display = null;
                    usernameErr.innerHTML = 'error while fetching to server may be a network issue';
                }
            })
            .catch(err => {
                loading.style.display = null;
                usernameErr.innerHTML = 'error while fetching to server may be a network issue';
            })
    }
})


// login handler

const logInBtn = document.querySelector('.submitLoginBtn');

// err
const logInErr = document.querySelector('#log-email-err');

const loginemail = document.querySelector('#loginemail');
const loginpassword = document.querySelector('#loginpassword');

logInBtn.addEventListener('click', () => {

    const email = document.querySelector('#loginemail').value;
    const password = document.querySelector('#loginpassword').value;
    loading.style.display = 'flex';

    fetch('http://schedular-app-438.herokuapp.com/login', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                // alert(data.email);

                localStorage.setItem('user', JSON.stringify(data));
                // alert(JSON.parse(localStorage.getItem('user')));
                fetch('http://schedular-app-438.herokuapp.com/all-notes', {
                    method: 'post',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        email: data.email
                    })
                })
                    .then(res => res.json())
                    .then(notes => {
                        localStorage.setItem('notes', JSON.stringify(notes));
                        fetch('http://schedular-app-438.herokuapp.com/all-schedules', {
                            method: 'post',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            body: JSON.stringify({
                                email: data.email
                            })
                        })
                            .then(res => res.json())
                            .then(schedules => {
                                localStorage.setItem('schedules', JSON.stringify(schedules));
                                fetch('http://schedular-app-438.herokuapp.com/all-projects', {
                                    method: 'post',
                                    headers: new Headers({ 'Content-Type': 'application/json' }),
                                    body: JSON.stringify({
                                        email: data.email
                                    })
                                })
                                    .then(res => res.json())
                                    .then(projects => { 
                                        localStorage.setItem('projects', JSON.stringify(projects));
                                        fetch('http://schedular-app-438.herokuapp.com/todos', {
                                            method: 'post',
                                            headers: new Headers({ 'Content-Type': 'application/json' }),
                                            body: JSON.stringify({
                                                email: data.email
                                            })
                                        })
                                            .then(res => res.json())
                                            .then(todos => {
                                                localStorage.setItem('todo', JSON.stringify(todos));
                                                isloggedIn = true;
                                                loginpage.style.display = null;
                                                registerpage.style.display = null;
                                                loading.style.display = null;
                                                downBar.style.display = null;
                                                // console.log('yes');
                                                homeViewSetup();
                                                logInErr.innerHTML = '';
                                            })
                                    })
                            })
                        // homeScreenDOMCreation();

                    })
                // console.log(data);

            } else if (data === 'wrong credentials') {
                loading.style.display = null;
                logInErr.innerHTML = 'email and password dont match';
            } else {
                loading.style.display = null;
                logInErr.innerHTML = data;
            }
        })
        .catch(err => {
            logInErr.innerHTML = 'error while fetching to server may be a network issue';
        })
})


// sign out btn

const signOutBtn = document.querySelector('.sign-out-btn');

signOutBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload()
})

const allInputsArr = [
    username,
    email,
    password,
    loginemail,
    loginpassword
];

const allInputValueToNull = () => {
    allInputsArr.map(item => {
        item.value = '';
    })
}