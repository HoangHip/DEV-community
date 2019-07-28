view.DEVregister = function () {
    document.getElementById('app').innerHTML = components.DEVregister
    

    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    // let type = document.getElementById('select-type')

    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler
    // type.onchange = singleSelectChangeValue

    function linkClickHandler() {
        view.showComponents('DEVlogIn')
    }

    // function singleSelectChangeValue() {
    //     var x = document.getElementById('select-type').value
    //     if(x == 'DEV') {
    //         view.showComponents('register')
    //     } else {
    //         document.getElementById('app').innerHTML = components.Employerregister
    //     }
    // }
    
    function buttonClickHandler(e) {
        e.preventDefault()

        let form = document.getElementById(config.FORM_REGISTER_ID)
        let registerInfo = {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            email: form.email.value,
            password: form.password.value,
            confirmPassword: form.confirmPassword.value
        }
        // if (!registerInfo.firstname) {
        //     view.setText(config.ERROR_FIRSTNAME_ID, 'Invalid firstname!')

        // } else {
        //     view.setText(config.ERROR_FIRSTNAME_ID, '')
        // }
        // if (!registerInfo.lastname) { 
        //     view.setText(config.ERROR_LASTNAME_ID, 'Invalid lastname!')
        // } else {
        //     view.setText(config.ERROR_LASTNAME_ID, '')
        // }
        // if (!validateEmail) {
        //     view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        // } else {
        //     view.setText(config.ERROR_EMAIL_ID, '')
        // }
        // if (!validatePassword) {
        //     view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        // } else {
        //     view.setText(config.ERROR_PWD_ID, '')
        // }
        // if (!registerInfo.confirmPassword || registerInfo.password != registerInfo.confirmPassword) {
        //     view.setText(config.ERROR_CONFIRM_PWD_ID, 'Invalid confirm password!')
        // } else {
        //     view.setText(config.ERROR_CONFIRM_PWD_ID, '')
        // }
        if (validateRegisterInfo(registerInfo)) {
            controller.register(registerInfo)
        }
    }
}

view.DEVlogIn = function() {
    document.getElementById('app').innerHTML = components.DEVlogIn
    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler

    function linkClickHandler() {
        view.showComponents('DEVregister')
    }

    function buttonClickHandler(e) { 
        e.preventDefault()
        let form = document.getElementById(config.FORM_LOG_IN_ID)
        let logInInfo = {
            email: form.email.value,
            password: form.password.value
        }

        // if (!logInInfo.email) {
        //     view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        // } else {
        //     view.setText(config.ERROR_EMAIL_ID, '')
        // }

        // if (!logInInfo.password) {
        //     view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        // } else {
        //     view.setText(config.ERROR_PWD_ID, '')
        // }
        if (validateLogInInfo(logInInfo)) {
            controller.logIn(logInInfo)
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    var re = /^[0-9a-zA-Z]{8,}$/;
    return re.test(String(password).toLowerCase());
}


function validateRegisterInfo(registerInfo) {
    return registerInfo.email
        && registerInfo.password
        && registerInfo.firstname
        && registerInfo.lastname
        && registerInfo.confirmPassword == registerInfo.password
}


function validateLogInInfo(logInInfo) {
    return logInInfo.email
        && logInInfo.password
}