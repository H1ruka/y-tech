const lu = document.getElementById('l-u')
const uu = document.getElementById('u-u')
const rd = document.getElementById('r-d')
const dd = document.getElementById('d-d')

window.addEventListener('scroll', function(){
    const crolly = window.scrollY || this.window.pageYOffset
    const screenWidth = window.innerWidth;

    if(crolly >= 530 && screenWidth > 430){
        lu.style.transition = 'all 1s'
        lu.style.transform = 'translateY(0px)'
        uu.style.transition = 'all 1s'
        uu.style.transform = 'translateX(0px)'
        rd.style.transition = 'all 1s 2s'
        rd.style.opacity = '1'
        rd.style.transform = 'translateY(0px)'
        dd.style.transition = 'all 1s 2s'
        dd.style.transform = 'translateX(0px)'
    }
})