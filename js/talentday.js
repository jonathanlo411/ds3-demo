
// Redirect to forms
var students = document.getElementById('bt-students')
var employers = document.getElementById('bt-employers')

addRedirect(employers, 'talent-day-2022-geisel.pdf')

function addRedirect(bt, site) {
    bt.addEventListener("click", () => {
        window.open(
            site,
            '_blank'
        );
    })
}

// Making imgs clickable
var imgs = document.getElementsByTagName("img")

for (i = 0; i < imgs.length; i ++) {
    var img = imgs[i]
    addRedirect(img, img.src)
}
