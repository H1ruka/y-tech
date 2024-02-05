function scrollToTarget() {
    const targetElement = document.getElementById('section-b');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function () {
    var myElement = document.getElementById('about');
    
    // Check if the vertical scroll position is between 600 and 700 pixels
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= 900 && scrollPosition <= 1500) {
        myElement.style.borderBottom = 'solid 2px #ffbf00'
    } else {
        myElement.style.borderBottom = 'solid 2px transparent'
    }
});

function scrollToTarget2() {
    const targetElement1 = document.getElementById('section-e');

    if (targetElement1) {
      targetElement1.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function () {
    var myElement = document.getElementById('concept');
    
    // Check if the vertical scroll position is between 600 and 700 pixels
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= 2500 && scrollPosition <= 9500) {
        myElement.style.borderBottom = 'solid 2px #ffbf00'
    } else {
        myElement.style.borderBottom = 'solid 2px transparent'
    }
});