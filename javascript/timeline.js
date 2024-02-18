const timeline = document.getElementById('timeline-line')
const h31 = document.getElementById('h31')
const h41 = document.getElementById('h41')
const dot1 = document.getElementById('dot1')

const h32 = document.getElementById('h32')
const h42 = document.getElementById('h42')
const dot2 = document.getElementById('dot2')

const h33 = document.getElementById('h33')
const h43 = document.getElementById('h43')
const dot3 = document.getElementById('dot3')

const h34 = document.getElementById('h34')
const h44 = document.getElementById('h44')
const dot4 = document.getElementById('dot4')

const h35 = document.getElementById('h35')
const h45 = document.getElementById('h45')
const dot5 = document.getElementById('dot5')

const h36 = document.getElementById('h36')
const h46 = document.getElementById('h46')
const dot6 = document.getElementById('dot6')

const h37 = document.getElementById('h37')
const h47 = document.getElementById('h47')
const dot7 = document.getElementById('dot7')

const h38 = document.getElementById('h38')
const h48 = document.getElementById('h48')
const dot8 = document.getElementById('dot8')

dot1.addEventListener('click', function(){

    timeline.style.height = '87%'
    timeline.style.transition = 'all 11s'
    
    dot1.style.transform = 'translate(-50%) rotate(360deg)'
    dot1.style.transition = 'all .5s'
    h31.style.opacity = '1'
    h31.style.transition = 'all 1s .4s'
    h41.style.opacity = '1'
    h41.style.transition = 'all 1s .8s'
    
    dot2.style.opacity = '1'
    dot2.style.transition = 'all 1s .8s'
    h32.style.opacity = '1'
    h32.style.transition = 'all 1s 1.2s'
    h42.style.opacity = '1'
    h42.style.transition = 'all 1s 1.6s'
    
    dot3.style.opacity = '1'
    dot3.style.transition = 'all 1s 1.6s'
    h33.style.opacity = '1'
    h33.style.transition = 'all 1s 2s'
    h43.style.opacity = '1'
    h43.style.transition = 'all 1s 2.4s'
    
    dot4.style.opacity = '1'
    dot4.style.transition = 'all 1s 2.4s'
    h34.style.opacity = '1'
    h34.style.transition = 'all 1s 2.8s'
    h44.style.opacity = '1'
    h44.style.transition = 'all 1s 3.2s'
    
    dot5.style.opacity = '1'
    dot5.style.transition = 'all 1s 3.2s'
    h35.style.opacity = '1'
    h35.style.transition = 'all 1s 3.6s'
    h45.style.opacity = '1'
    h45.style.transition = 'all 1s 4s'
    
    dot6.style.opacity = '1'
    dot6.style.transition = 'all 1s 4s'
    h36.style.opacity = '1'
    h36.style.transition = 'all 1s 4.4s'
    h46.style.opacity = '1'
    h46.style.transition = 'all 1s 4.8s'
    
    dot7.style.opacity = '1'
    dot7.style.transition = 'all 1s 4.8s'
    h37.style.opacity = '1'
    h37.style.transition = 'all 1s 5.2s'
    h47.style.opacity = '1'
    h47.style.transition = 'all 1s 5.6s'
    
    dot8.style.opacity = '1'
    dot8.style.transition = 'all 1s 5.6s'
    h38.style.opacity = '1'
    h38.style.transition = 'all 1s 6s'
    h48.style.opacity = '1'
    h48.style.transition = 'all 1s 6.4s'
}
)

window.addEventListener('scroll', function() {
    
     
})