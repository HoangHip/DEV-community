view.home = function () {
    document.getElementById('app').innerHTML = components.home

    let DEV_btn = document.getElementById('DEV-btn')
    let Employer_btn = document.getElementById('employer-btn')

    DEV_btn.onclick = DEVbuttonClickHandler
    Employer_btn.onclick = EmployerbuttonClickHandler
    function DEVbuttonClickHandler() {
        view.showComponents('login')
    }
    function EmployerbuttonClickHandler() {
        console.log('employer-log-in')
    }
}