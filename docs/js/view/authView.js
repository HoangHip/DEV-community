view.logIn = function() {
    document.getElementById('app').innerHTML = components.logIn
    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler

    function linkClickHandler() {
        view.showComponents('register')
    }

    function buttonClickHandler(e) { // e or event
        e.preventDefault()
        let form = document.getElementById(config.FORM_LOG_IN_ID)
        let logInInfo = {
            email: form.email.value,
            password: form.password.value
        }

        if (!logInInfo.email) {
            // document.getElementById(config.ERROR_EMAIL_ID).innerText = 'Invalid email!'
            view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        } else {
            // document.getElementById(config.ERROR_EMAIL_ID) = ''
            view.setText(config.ERROR_EMAIL_ID, '')
        }

        if (!logInInfo.password) {
            view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        } else {
            view.setText(config.ERROR_PWD_ID, '')
        }
        // TODO
        if (validateLogInInfo(logInInfo)) {
            // do log in 
            controller.logIn(logInInfo)
        }
    }
}