var DesignerLeft = 50;

function myText() {
    alert('hello ji');
}

function AddEvent(elem, eventname, func) {
    if (elem.addEventListener) {
        elem.addEventListener(eventname, func, false);
    }
    else if (elem.attachEvent) {
        elem.attachEvent('on' + eventname, func);
    }
}

function reset() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var limitDesigner = vw / 2;
    document.getElementsByClassName("designer")[0].style.width = limitDesigner + 'px';
    document.getElementsByClassName("designerimg")[0].style.left = DesignerLeft + 'vw';
    document.getElementsByClassName("coderimg")[0].style.left = DesignerLeft + 'vw';
    document.getElementsByClassName("code")[0].style.opacity = 1;
    document.getElementsByClassName("design")[0].style.opacity = 1;
}

function hideNav() {
    document.getElementById('nav').checked = false;
}

window.onresize = function () {
    reset();
}

function codermove(e) {
    e = e || window.event;
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var limitDesigner = vw / 2;
    var adjust = limitDesigner - e.clientX;
    if (adjust <= 0) {
        document.getElementsByClassName("designer")[0].style.width = (limitDesigner + (adjust / 2)) + 'px';
        document.getElementsByClassName("designerimg")[0].style.left = DesignerLeft + (adjust / 200) + 'vw';
        document.getElementsByClassName("coderimg")[0].style.left = DesignerLeft + (adjust / 200) + 'vw';
        document.getElementsByClassName("design")[0].style.opacity = (1 - ((e.clientX - limitDesigner) / limitDesigner));
    }
    else {
        reset();
    }
}

function designermove(e) {
    e = e || window.event;
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var limitDesigner = vw / 2;
    var adjust = limitDesigner - e.clientX;
    if (adjust >= 0 && adjust <= limitDesigner) {
        document.getElementsByClassName("designer")[0].style.width = (limitDesigner + (adjust / 2)) + 'px';
        document.getElementsByClassName("designerimg")[0].style.left = DesignerLeft + (adjust / 200) + 'vw';
        document.getElementsByClassName("coderimg")[0].style.left = DesignerLeft + (adjust / 200) + 'vw';
        document.getElementsByClassName("code")[0].style.opacity = (e.clientX / limitDesigner);
    }
    else if (adjust > limitDesigner) {
        reset();
    }
}


function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    }
    return false;
}


window.onload = function () {

    var el1 = document.getElementsByClassName("designercoder")[0];
    this.AddEvent(el1, 'mouseleave', reset);

    var el2 = document.getElementsByClassName("coder")[0];
    this.AddEvent(el2, 'mousemove', codermove);

    var el3 = document.getElementsByClassName("designer")[0];
    this.AddEvent(el3, 'mousemove', designermove);

    if (document.getElementById('header').style.position == "fixed") {
        this.alert('worked');
    }

    if(msieversion()) {
        document.getElementById('header').style.position = "relative";
    }

    document.getElementById('loader').style.display = "none";

    
}

