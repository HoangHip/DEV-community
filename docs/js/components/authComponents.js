components.logIn = `
<section class="Dev-log-in-container">
<div class="form-container">

    <div class="form-header">
        <span class="logo">Log In as DEV</span>
        <a href="#" id="form-link">Not yet have an account? Register</a>
    </div>

    <div class="form-wrapper">
        <form id="${config.FORM_DEV_LOG_IN_ID}">
            <div class="input-wrapper">
                <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email">
                <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password">
                <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
            </div>
            <div id="${config.MESSAGE_ERROR_ID}"></div>
            <div class="form-footer">
                <button type="submit" id="form-btn">Log in</button>
            </div>
        </form>
    </div>
</div>
</section>
`