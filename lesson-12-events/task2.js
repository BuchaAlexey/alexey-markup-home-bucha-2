let smile = document.getElementsByClassName('smile');
smile.onmousedown = function (e) {
    let coords = getCoords(smile);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    smile.style.position = 'absolute';
    document.body.appendChild(smile);
    moveAt(e);
    smile.style.zIndex = 1000;

    function moveAt(e) {
        smile.style.left = e.pageX - shiftX + 'px';
        smile.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function (e) {
        moveAt(e);
    };
    smile.onmouseup = function () {
        document.onmousemove = null;
        smile.onmouseup = null;
    };
};
smile.ondragstart = function () {
    return false;
};

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

