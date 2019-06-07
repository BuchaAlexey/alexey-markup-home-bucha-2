document.body.style.margin = 0;
document.body.style.padding = 0;

function CreateRound() {
    var sVGElem = document.getElementById('SSS');
    sVGElem.setAttribute("height",'700px');
    sVGElem.setAttribute("width",'700px');
    sVGElem.setAttribute("viewBox",'0 0 700 700');

    //размеры часов, циферблата, стелок и прочее
    var clockFaceCenterX = 350; //Центр циферблата по Х
    var clockFaceCenterY = 350; //Центр циферблата по У
    var clockFaceRadius = 350; //Радиус циферблата
    var smCircleRadius = 35; //Радиус кругляшка для цифры
    var smCircleCenterX = 35; //Центр кругляшка для цифры по Х
    var smCircleCenterY = 35; //Центр кругляшка для цифры по У
    var digitalClockFaceWidth = 200; //Ширина электронного циферблата
    var digitalClockFaceHeight = 70; //Высота электронного циферблата
    var digitalClockFaceCornerX = 10; //Скругление угла электронного циферблата по Х
    var digitalClockFaceCornerY = 10; //Скругление угла электронного циферблата по У
    var digitalClockFaceX = 250; //Координата вставки электронного циферблата по Х
    var digitalClockFaceY = 150; //Координата вставки электронного циферблата по У
    var clockTextFontSize = 50; //Размер текста
    var tspandX = -20; //Смещение tspan относительно text по Х
    var tspandY = 15; //Смещение tspan относительно text по Y
    var dClockFaceTextX = 260; //Расположение текста электронных часов по Х
    var dClockFaceTextY = 200; //Расположение текста электронных часов по У
    var angelRotate = 180; //Угол поворота
    var strokeWidth = 15; //толщина часовой стрелки
    var y2 = 170; //длина часовой стрелки
    var handy1 = -10; //делаю стрелкам 'хвостики'
    var aTBy = 360; //значение до которого будет происходить анимация
    var hours = 12;
    var angel = 30;
    var radiusX = clockFaceCenterX - 2*smCircleRadius;
    var radiusY = clockFaceCenterY - 2*smCircleRadius;
    var newAngel = angel/180*Math.PI;

    //создание и расположение циферблата аналогового
    var clockFace = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
    clockFace.setAttribute("stroke",'yellow');
    clockFace.setAttribute('fill','blue');
    clockFace.setAttribute('rx', clockFaceRadius);
    clockFace.setAttribute('ry', clockFaceRadius);
    clockFace.setAttribute('cx', clockFaceCenterX);
    clockFace.setAttribute('cy', clockFaceCenterY);
    sVGElem.appendChild(clockFace);

    //создание и расположение кружков для цифер
    for(var i=1; i<13; i++){
        var smCircleX = clockFaceCenterX + radiusX*Math.sin(newAngel);
        var smCircleY = clockFaceCenterY - radiusY*Math.cos(newAngel);
        var smCircle = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
        smCircle.setAttribute("stroke",'green');
        smCircle.setAttribute('fill','black');
        smCircle.setAttribute('rx', smCircleRadius);
        smCircle.setAttribute('ry', smCircleRadius);
        smCircle.setAttribute('cx', smCircleX);
        smCircle.setAttribute('cy', smCircleY);
        sVGElem.appendChild(smCircle);
        newAngel += angel/180*Math.PI;
    }

    //создание и расположение циферблата цифрового
    var digitalClockFace = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    digitalClockFace.setAttribute("stroke",'white');
    digitalClockFace.setAttribute("fill",'red');
    digitalClockFace.setAttribute("width", digitalClockFaceWidth);
    digitalClockFace.setAttribute("height", digitalClockFaceHeight);
    digitalClockFace.setAttribute("rx", digitalClockFaceCornerX);
    digitalClockFace.setAttribute("ry", digitalClockFaceCornerY);
    digitalClockFace.setAttribute("x", digitalClockFaceX);
    digitalClockFace.setAttribute("y", digitalClockFaceY);
    sVGElem.appendChild(digitalClockFace);

    //создаю и расставляю цифры аналоговых часов
    for (var i=1; i<13; i++){
        var newText = document.createElementNS("http://www.w3.org/2000/svg",'text');
        var newTextX = clockFaceCenterX + radiusX*Math.sin(newAngel);
        var newTextY = clockFaceCenterY - radiusY*Math.cos(newAngel);
        newText.setAttribute("stroke",'white');
        newText.setAttribute("fill",'white');
        newText.setAttribute('font-size', clockTextFontSize);
        newText.setAttribute('x',newTextX);
        newText.setAttribute('y',newTextY);
        var tsNewText = document.createElementNS("http://www.w3.org/2000/svg",'tspan');
        tsNewText.setAttribute("stroke",'white');
        tsNewText.setAttribute("fill",'white');
        tsNewText.setAttribute('font-size', clockTextFontSize);
        tsNewText.innerHTML = i;
        tsNewText.setAttribute('dx', tspandX);
        tsNewText.setAttribute('dy', tspandY);
        newText.appendChild(tsNewText);
        sVGElem.appendChild(newText);
        newAngel += angel/180*Math.PI;
    }

    //создание и расположение цифрового времени
    var digitalTime = document.createElementNS("http://www.w3.org/2000/svg",'text');
    digitalTime.setAttribute("stroke",'green');
    digitalTime.setAttribute("fill",'green');
    digitalTime.setAttribute('font-size',clockTextFontSize);
    digitalTime.setAttribute('x', dClockFaceTextX);
    digitalTime.setAttribute('y', dClockFaceTextY);
    digitalTime.setAttribute('id','digitalTime');
    digitalTime.innerHTML = editTime(new Date()).str;
    sVGElem.appendChild(digitalTime);

    //создание стрелок часов
    var g2 = document.createElementNS("http://www.w3.org/2000/svg",'g');
    g2.setAttribute("transform",'translate(' + clockFaceCenterX + ',' + clockFaceCenterY + ')');// позиционирую центр вращения стрелок аналоговых часов
    var g = document.createElementNS("http://www.w3.org/2000/svg",'g');
    g.setAttribute("transform",'rotate(' + angelRotate + ')');
    for(var i = 1; i<4; i++){
        var g1 = document.createElementNS("http://www.w3.org/2000/svg",'g');
        var hand = document.createElementNS("http://www.w3.org/2000/svg",'line');
        hand.setAttribute("stroke",'black');
        hand.setAttribute("y1",handy1);
        hand.setAttribute("y2",y2);
        hand.setAttribute("stroke-width", strokeWidth);
        hand.setAttribute("stroke-linecap",'round');
        var animTrans = document.createElementNS("http://www.w3.org/2000/svg",'animateTransform');
        animTrans.setAttribute("attributeName",'transform');
        animTrans.setAttribute("type",'rotate');
        animTrans.setAttribute("repeatCount",'indefinite');
        animTrans.setAttribute("by",aTBy);
        if (i==1) {
            g1.setAttribute("id",'hoursHand');
            animTrans.setAttribute("dur",'12h');
        }
        if (i==2) {
            g1.setAttribute("id",'minutesHand');
            animTrans.setAttribute("dur",'60min');
        }
        if (i==3) {
            g1.setAttribute("id",'secondsHand');
            animTrans.setAttribute("dur",'60s');
        }
        g1.appendChild(hand);
        g1.appendChild(animTrans);
        g.appendChild(g1);
        strokeWidth -= 6; //уменьшаю толщину следующей стрелки
        y2 += 50; //увеличиваю длину следующей стрелки
    }
    g2.appendChild(g);
    sVGElem.appendChild(g2);

    var h = parseInt(editTime(new Date()).hours);
    var hOnClockFace = 12;
    if (h > hOnClockFace){
        var hs = h - hOnClockFace;
    } else {
        var hs = h;
    }

    var m = parseInt(editTime(new Date()).minutes);
    var s = parseInt(editTime(new Date()).seconds);
    var degreeInSecond = 6;
    var degreeInMinute = 6;
    var degreeInHour = 30;
    var seconds = degreeInSecond*s;
    var minutes = degreeInMinute*(m + (s/60));
    var hours = degreeInHour*(hs + (m/60) + (s/3600));

    var hoursHand = document.getElementById('hoursHand');
    var minutesHand = document.getElementById('minutesHand');
    var secondsHand = document.getElementById('secondsHand');
    hoursHand.setAttribute('transform','rotate(' + hours + ')');
    minutesHand.setAttribute('transform','rotate(' + minutes + ')');
    secondsHand.setAttribute('transform','rotate(' + seconds + ')');
}

CreateRound();
setInterval(update, 1000);

function update(){
    var currentTime = new Date();

    var current = editTime(currentTime).str;
    var digitalTime = document.getElementById('digitalTime');
    digitalTime.innerHTML = current;


}

function editTime(DT){
    var Hours = DT.getHours();
    var Minutes = DT.getMinutes();
    var Seconds = DT.getSeconds();
    return {'str' : toStr(Hours,2) + ':' +  toStr(Minutes,2) + ':' + toStr(Seconds,2),
        'minutes' : Minutes,
        'seconds' : Seconds,
        'hours' : Hours};
}

function toStr(val, len){
    var strVal = val.toString();
    while ( strVal.length < len ){
        strVal = '0' + strVal;
    }
    return strVal;
}