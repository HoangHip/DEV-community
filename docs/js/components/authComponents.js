components.DEVregister = `
<section class="register-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>
    
        <div class="form-wrapper">
            <form id="${config.FORM_REGISTER_ID}">
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="${config.INPUT_FIRSTNAME_NAME}" placeholder="First name" >
                        <div class="error-message" id='${config.ERROR_FIRSTNAME_ID}'></div>                        
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="${config.INPUT_LASTNAME_NAME}" placeholder="Last name" >
                        <div class="error-message" id='${config.ERROR_LASTNAME_ID}'></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email" >
                    <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password" >
                    <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="${config.INPUT_CONFIRM_PASSWORD_NAME}" placeholder="Confirm password" >
                    <div class="error-message" id='${config.ERROR_CONFIRM_PWD_ID}'></div>
                </div>
                <div id="${config.MESSAGE_ERROR_ID}"></div>
                <div id="${config.MESSAGE_SUCCESS_ID}"></div>
                
                <div class="form-footer">
                    <a href="#" id="form-link">Already have an account? Login</a>
                    <button type="submit" id="form-btn">Register</button>
                </div>
            </form>
        </div>
    </div>
</section>
`

components.Employerregister = `
<section class="information-container">
<div class="form-wrapper">
    <form id="">
        <select name="" class="input-wrapper" id="${config.SELECT_TYPE_ID}">
            <option value="DEV">DEV</option>
            <option value="Employer">Employer</option>
        </select>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Company name">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Email">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Introduction">
            <div></div>
        </div>
        <div class="form-footer">
            <button type="submit" id="form-btn">Submit</button>
        </div>
    </form>
</div>
</section>
`

components.DEVlogIn = `
<section class="log-in-container">
<div class="form-container">
    <div class="logo-login">
        <span>Login as DEV</span>
    </div>

    <div class="form-wrapper">
        <form id="${config.FORM_LOG_IN_ID}">
            <div class="input-group">
                <input type="email" class="input-group-text" name="${config.INPUT_EMAIL_NAME}"
                    placeholder="Email">
                <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
            </div>
            <div class="input-group">
                <input type="password" class="input-group-text" name="${config.INPUT_PWD_NAME}"
                    placeholder="Password">
                <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
            </div>
            <div id="${config.MESSAGE_ERROR_ID}"></div>
            <div class="form-footer">
                <a href="#" id="form-link">Not yet have an account? Register</a>
                <button type="submit" id="form-btn">Log in</button>
            </div>
        </form>
    </div>
</div>
</section>
`

components.DEVinfo = `
<section class="information-container">
<div class="form-wrapper">
    <form id="">
        <select name="" class="job-detail" id="job-detail">
            <option value="">Job</option>
            <option value="tester">Tester</option>
            <option value="fullstack">Fullstack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="game">Game</option>
        </select>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="School name">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Major">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Awards">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Job">
            <div></div>
        </div><div class="input-wrapper">
            <input type="text" name="" placeholder="Company">
            <div></div>
        </div><div class="input-wrapper">
            <input type="text" name="" placeholder="From">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="To">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Achievements">
            <div></div>
        </div>
        <div class="form-footer">
            <button type="submit" id="form-btn">Submit</button>
        </div>
    </form>
</div>
</section>
`

components.Employerinfo = `
<section class="information-container">
<div class="form-wrapper">
    <form id="">
        <select name="" class="input-wrapper" id="${config.SELECT_TYPE_ID}">
            <option value="DEV">DEV</option>
            <option value="Employer">Employer</option>
        </select>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Company name">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Email">
            <div></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="" placeholder="Introduction">
            <div></div>
        </div>
        <div class="form-footer">
            <button type="submit" id="form-btn">Submit</button>
        </div>
    </form>
</div>
</section>
`