const aim = document.getElementById('aim')
const arrow = document.getElementById('arrow')

window.addEventListener('scroll', function() {
    const scrolly = window.scrollY || this.window.pageYOffset
    const screenWidth = window.innerWidth;

    if (scrolly >= 1830 && screenWidth > 430){
        aim.style.opacity = '1'
        aim.style.transition = 'all 1s 2.5s'
        arrow.style.left = '1000px'
        arrow.style.transition = 'all 1s 3.5s'
    }
})