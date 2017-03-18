allNavLinks = document.querySelectorAll('.nav_link')
for (var i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        allSections = document.querySelectorAll('section');
        var target = document.querySelector(this.getAttribute("href"));
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 1000, true);

    });
};

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
}

document.querySelector('.change_lang').addEventListener("click", function(event) {
    if (document.querySelector('.heb').style.display == "none"){
            changeLang ('allHeb', '.heb', "block");
            changeLang ('allEng', '.eng', "none");
            this.innerHTML = 'for english';      
        }else {
            changeLang ('allEng', '.eng', "block");
            changeLang ('allHeb', '.heb', "none");
            this.textContent = document.querySelector('.change_lang').getAttribute("data-name"); 
            }
 });
  
function changeLang (lang, selector, display ) {
    var lang = document.querySelectorAll(selector);
    for (var i = 0; i < lang.length; i++){
    lang[i].style.display = display;
    }
};

