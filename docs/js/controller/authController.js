controller.logIn = async function (logInInfo) {
    if (validateLogInInfo(logInInfo)) {
        try {
            let result = await firebase.auth().signInWithEmailAndPassword(
                logInInfo.email,
                logInInfo.password
            )
            if (!result.user.emailVerified) {
                throw new Error('Please verify email first')
            } else {
            }
        } catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Log in failed!")
        }
    }
}