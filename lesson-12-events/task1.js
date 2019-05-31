let smile = document.getElementById('smilik');
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


    let secondSmile = document.getElementById('secondSmile');
    secondSmile.onmousedown = function (e) {
        let coords2 = getCoords(secondSmile);
        let shiftX2 = e.pageX - coords2.left;
        let shiftY2 = e.pageY - coords2.top;
        secondSmile.style.position = 'absolute';
        document.body.appendChild(secondSmile);
        moveAt(e);
        secondSmile.style.zIndex = 1000;

        function moveAt(e) {
            secondSmile.style.left = e.pageX - shiftX2 + 'px';
            secondSmile.style.top = e.pageY - shiftY2 + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };
        secondSmile.onmouseup = function () {
            document.onmousemove = null;
            secondSmile.onmouseup = null;
        };
    };
    secondSmile.ondragstart = function () {
        return false;
    };

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
}

