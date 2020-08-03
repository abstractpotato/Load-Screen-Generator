function run() {
    var loadMessage = getElementValue(".loadMessage");
    var time = getElementValue(".time");
    var endMessage = getElementValue(".endMessage");
    setCookie("loadMessage", loadMessage, 1);
    setCookie("time", time, 1);
    setCookie("endMessage", endMessage, 1);

    redirect("load.html");
}
