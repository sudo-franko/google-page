function changeMaxLength() {
    if (window.innerWidth < 640)
        document.getElementById("portal").setAttribute("maxlength", "49");
}

window.addEventListener("resize", changeMaxLength);

