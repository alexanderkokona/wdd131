let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark'){
        document.body.className = 'dark';
        logo.setAttribute('src', 'byui-logo_white.png')
        // body to a dark class
    } else {
        document.body.className = 'light';
        logo.setAttribute('src', 'byui-logo.webp')
        // change the image back to original
    }
}