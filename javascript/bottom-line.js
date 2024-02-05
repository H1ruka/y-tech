const line = document.getElementById('bottom-line')

window.addEventListener('scroll', function() {

    const scrollY = window.scrollY || window.pageYOffset;
    const screenWidth = window.innerWidth;

    if (scrollY >= 838 && screenWidth <= 430){
        line.style.backgroundColor = '#ffbf00'
    }
    else{
        line.style.backgroundColor = 'transparent'
    }

    if (scrollY >= 743 && screenWidth > 430){
        line.style.backgroundColor = '#ffbf00'
    }
    else{
        line.style.backgroundColor = 'transparent'
    }
})
