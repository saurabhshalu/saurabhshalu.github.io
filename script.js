var DesignerLeft = 50;

function AddEvent(elem, eventname, func) {
  if (elem.addEventListener) {
    elem.addEventListener(eventname, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + eventname, func);
  }
}

function reset() {
  var vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  var limitDesigner = vw / 2;
  document.getElementsByClassName("designer")[0].style.width =
    limitDesigner + "px";
  document.getElementsByClassName("designerimg")[0].style.left =
    DesignerLeft + "vw";
  document.getElementsByClassName("coderimg")[0].style.left =
    DesignerLeft + "vw";
  document.getElementsByClassName("code")[0].style.opacity = 1;
  document.getElementsByClassName("design")[0].style.opacity = 1;
}

function hideNav() {
  document.getElementById("nav").checked = false;
}

window.onresize = function () {
  reset();
};

function codermove(e) {
  e = e || window.event;
  var vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  var limitDesigner = vw / 2;
  var adjust = limitDesigner - e.clientX;
  if (adjust <= 0) {
    document.getElementsByClassName("designer")[0].style.width =
      limitDesigner + adjust / 2 + "px";
    document.getElementsByClassName("designerimg")[0].style.left =
      DesignerLeft + adjust / 200 + "vw";
    document.getElementsByClassName("coderimg")[0].style.left =
      DesignerLeft + adjust / 200 + "vw";
    document.getElementsByClassName("design")[0].style.opacity =
      1 - (e.clientX - limitDesigner) / limitDesigner;
  } else {
    reset();
  }
}

function designermove(e) {
  e = e || window.event;
  var vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  var limitDesigner = vw / 2;
  var adjust = limitDesigner - e.clientX;
  if (adjust >= 0 && adjust <= limitDesigner) {
    document.getElementsByClassName("designer")[0].style.width =
      limitDesigner + adjust / 2 + "px";
    document.getElementsByClassName("designerimg")[0].style.left =
      DesignerLeft + adjust / 200 + "vw";
    document.getElementsByClassName("coderimg")[0].style.left =
      DesignerLeft + adjust / 200 + "vw";
    document.getElementsByClassName("code")[0].style.opacity =
      e.clientX / limitDesigner;
  } else if (adjust > limitDesigner) {
    reset();
  }
}

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // If Internet Explorer,
    return true;
  }
  return false;
}

var slider = document.getElementById("slider"),
  sliderItems = document.getElementById("slides"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName("slide"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add("loaded");

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  prev.addEventListener("click", function () {
    shiftSlide(-1);
  });
  next.addEventListener("click", function () {
    shiftSlide(1);
  });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    var vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;

      if (e.type == "touchstart") {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }
  }

  function dragAction(e) {
    var vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      e = e || window.event;

      if (e.type == "touchmove") {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = items.offsetLeft - posX2 + "px";
    }
  }

  function dragEnd(e) {
    var vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, "drag");
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, "drag");
      } else {
        items.style.left = posInitial + "px";
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function shiftSlide(dir, action) {
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

const basicScrollTop = () => {
  // The button
  const btnTop = document.querySelector(".gotoTop");
  // Reveal the button
  const btnReveal = () => {
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };
  const TopscrollTo = () => {
    window.scrollTo(0, 0);
  };
  // Listeners
  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};

window.onload = function () {
  const el1 = document.getElementsByClassName("designercoder")[0];
  this.AddEvent(el1, "mouseleave", reset);

  const el2 = document.getElementsByClassName("coder")[0];
  this.AddEvent(el2, "mousemove", codermove);

  const el3 = document.getElementsByClassName("designer")[0];
  this.AddEvent(el3, "mousemove", designermove);

  if (msieversion()) {
    document.getElementById("header").style.position = "relative";
  }

  document.getElementById("loader").style.display = "none";

  slide(slider, sliderItems, prev, next);

  basicScrollTop();
};
