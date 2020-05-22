var DesignerLeft = 50;


window.addEventListener("load", function(){
    document.getElementsByClassName("designer")[0].addEventListener("mousemove", function(e) {
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        var limitDesigner = vw/2;
        var adjust = limitDesigner - e.clientX;
        if(adjust>=0 && adjust<=limitDesigner) {
            document.getElementsByClassName("designer")[0].style.width = (limitDesigner + (adjust/2)) + 'px';
            document.getElementsByClassName("designerimg")[0].style.left = DesignerLeft + (adjust/200) + 'vw';
            document.getElementsByClassName("coderimg")[0].style.left =  DesignerLeft + (adjust/200) + 'vw';
            document.getElementsByClassName("code")[0].style.opacity = (e.clientX/limitDesigner);
        }
        else if(adjust>limitDesigner) {
            reset();
        }
    });

    document.getElementsByClassName("coder")[0].addEventListener("mousemove", function(e) {
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        var limitDesigner = vw/2;
        var adjust = limitDesigner - e.clientX;
        if(adjust<=0) {
            document.getElementsByClassName("designer")[0].style.width = (limitDesigner + (adjust/2)) + 'px';
            document.getElementsByClassName("designerimg")[0].style.left =  DesignerLeft + (adjust/200) + 'vw';
            document.getElementsByClassName("coderimg")[0].style.left =  DesignerLeft + (adjust/200) + 'vw';
            document.getElementsByClassName("design")[0].style.opacity = (1-((e.clientX-limitDesigner)/limitDesigner));
        }
        else {
            reset();
        }
    });

    document.getElementsByClassName("designercoder")[0].addEventListener("mouseleave", function(e) {
        reset();
    });
});
window.addEventListener('resize', (e) => {
    reset();
});

function reset() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var limitDesigner = vw/2;
    document.getElementsByClassName("designer")[0].style.width = limitDesigner + 'px';
    document.getElementsByClassName("designerimg")[0].style.left = DesignerLeft + 'vw';
    document.getElementsByClassName("coderimg")[0].style.left = DesignerLeft + 'vw';
    document.getElementsByClassName("code")[0].style.opacity = 1;
    document.getElementsByClassName("design")[0].style.opacity = 1;
}

function hideNav() {
    document.getElementById('nav').checked=false;
}