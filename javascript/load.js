var timeC = getCookie("time");
var time = Number(timeC);
var elapsedTime = 0;

var loadMessage = getCookie("loadMessage");
changeElementValue("message", loadMessage);

function update() {
    if (elapsedTime < time) {
        elapsedTime++;
        var value = elapsedTime / time * 100;
        changeElementWidth("loadingBar", value + "%");
    } else {
        setEndMessage();
    }
}

function setEndMessage() {
    var endMessage = getCookie("endMessage");
    changeElementValue("message", endMessage);
}
