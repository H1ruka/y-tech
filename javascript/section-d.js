const title_d = document.getElementById('d-title')
const small_d = document.getElementById('topic-3')
const o3 = document.getElementById('small-line3')
const o4 = document.getElementById('small-line4')
const text_d = document.getElementById('my-words')
const alisher = document.getElementById('c-alisher')

text_d.style.transform = 'translateX(-1400px)'

window.addEventListener('scroll', function() {

    const scrolly = window.scrollY || window.pageYOffset
    const screenWidth = window.innerWidth;


    if( scrolly >= 2130 && screenWidth <= 430){
        title_d.style.transform = 'translateY(0px)'
        title_d.style.transition = 'all 1s'
        small_d.style.opacity = '1'
        small_d.style.transition = 'all 1s 1s'
        o3.style.transform = 'translateX(0px)'
        o3.style.transition= 'all 1s .5s'
        o4.style.transform = 'translateX(0px)'
        o4.style.transition= 'all 1s .5s'
        text_d.style.transform = 'translateX(0px)'
        text_d.style.transition = 'all 1s 2s'
        alisher.style.opacity = '1'
        alisher.style.transition = 'all 1s 3s'
    }

    if( scrolly >= 1830 && screenWidth > 430){
        title_d.style.transform = 'translateY(0px)'
        title_d.style.transition = 'all 1s'
        small_d.style.opacity = '1'
        small_d.style.transition = 'all 1s 1s'
        o3.style.transform = 'translateX(0px)'
        o3.style.transition= 'all 1s .5s'
        o4.style.transform = 'translateX(0px)'
        o4.style.transition= 'all 1s .5s'
        text_d.style.transform = 'translateX(0px)'
        text_d.style.transition = 'all 1s 1s'
        alisher.style.opacity = '1'
        alisher.style.transition = 'all 1s 2s'
    }

})