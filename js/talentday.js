
// Redirect to forms
var students = document.getElementById('bt-students')
var employers = document.getElementById('bt-employers')

addRedirect(students, 'https://www.google.com/')
addRedirect(employers, 'talent-day-2022-geisel.pdf')

function addRedirect(bt, site) {
    bt.addEventListener("click", () => {
        window.open(
            site,
            '_blank'
        );
    })
}

