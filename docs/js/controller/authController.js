controller.register = async function (registerInfo) { 
    if (validateRegisterInfo(registerInfo)) {
        try {
            let resultCreateUser = await window.firebase.auth().createUserWithEmailAndPassword(
                registerInfo.email, registerInfo.password)

            firebase.auth().currentUser.updateProfile({
                displayName: registerInfo.firstname + " " + registerInfo.lastname
            })

            firebase.auth().currentUser.sendEmailVerification()

            // view.setText(config.MESSAGE_SUCCESS_ID, "Register successfully!")
        } catch (err) {
            // view.setText(config.MESSAGE_ERROR_ID, err.message || "Register failed!")
        }

    }
}


controller.DEVlogIn = async function (logInInfo) {
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

// // 
// controller.initAuth = function() {
//     view.showComponents('loading')
//     firebase.auth().onAuthStateChanged(async function(user) {
//         if(user && user.emailVerified) {
//             view.showComponents('chat')
            
//             // models.logIn(user)
//             // models.loadConversations(user.email)
//         } else {
//             if(user) {
//                 await firebase.auth().signOut()
//             }
//             view.showComponents('logIn')
//         }
//     })
// }