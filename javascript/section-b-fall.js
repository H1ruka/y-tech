const title = document.getElementById('small-b-title')
const small = document.getElementById('topic-1')
const o1 = document.getElementById('small-line1')
const o2 = document.getElementById('small-line2')
const img = document.getElementById('img-teamwork')
const text = document.getElementById('mentor-words')
const erdana = document.getElementById('c-erdana')
const imgl = document.getElementById('img-large')

window.addEventListener('scroll', function() {

    const scrolly = window.scrollY || window.pageYOffset
    const screenWidth = window.innerWidth;

    if( scrolly >= 530 && screenWidth <=430){
        title.style.transform = 'translateY(0px)'
        title.style.transition = 'all 1s'
        small.style.opacity = '1'
        small.style.transition = 'all 1s'
        o1.style.transform = 'translateX(0px)'
        o1.style.transition= 'all 1s .5s'
        o2.style.transform = 'translateX(0px)'
        o2.style.transition= 'all 1s .5s'
        img.style.opacity= '1'
        img.style.transition= 'all 1s 1s'
    }

    if (scrolly >= 630 && screenWidth <= 430){
        text.style.transform = 'translateX(0px)'
        text.style.transition = 'all 1s 2s'
        erdana.style.opacity = '1'
        erdana.style.transition = 'all 1s 3s'
    }

    if( scrolly >= 530 && screenWidth > 430){
        title.style.transform = 'translateY(0px)'
        title.style.transition = 'all 1s'
        small.style.opacity = '1'
        small.style.transition = 'all 1s'
        o1.style.transform = 'translateX(0px)'
        o1.style.transition= 'all 1s .5s'
        o2.style.transform = 'translateX(0px)'
        o2.style.transition= 'all 1s .5s'
        img.style.opacity= '1'
        img.style.transition= 'all 1s 1s'
    }

    if (scrolly >= 530 && screenWidth > 430){
        text.style.transform = 'translateX(0px)'
        text.style.transition = 'all 3s 1s'
        erdana.style.opacity = '1'
        erdana.style.transition = 'all 1s 4s'
        imgl.style.transform = 'translateX(450px)'
        imgl.style.transition = 'all 1s .7s'
    } 
})