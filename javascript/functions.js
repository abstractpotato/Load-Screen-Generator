//Basic Functions

function getCheckboxValue(checkBoxName) {
    return document.querySelector(checkBoxName).checked;
}

function getTextBoxValue(textBoxName) {
    return document.querySelector(textBoxName).value;
}

function getElementValue(element) {
    return document.querySelector(element).value;
}

function changeElementWidth(element, width) {
    document.getElementById(element).style.width = width;
}

function changeElementValue(element, value) {
    document.getElementById(element).innerHTML = value;
}

function changeElementImage(element, imageSrc) {
    document.getElementById(element).src = imageSrc;
}

function getComboboxValue(select) {
    return document.getElementById("select").value;
}

function uncheckRadio(radioID) {
    document.getElementById(radioID).checked = false;
}

function removeElement(element) {
    document.getElementByID(element).remove();
}

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function write(text) {
    document.write(text);
}

function redirect(newURL) {
    document.location.href = newURL;
}

function w() {
    alert("Worked!");
}

// COOKIE FUNCTIONS TAKEN FROM W3 SCHOOL
// I DON'T MAKE ANY CLAIMS HAVE CREATED OR OWN THIS CODE.
// https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
