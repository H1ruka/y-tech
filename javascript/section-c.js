const vertical_line = document.getElementById('vertical-line')
const h31 = document.getElementById('h31')
const h41 = document.getElementById('h41')
const dot2 = document.getElementById('dot2')

const h32 = document.getElementById('h32')
const h42 = document.getElementById('h42')
const dot3 = document.getElementById('dot3')

const h33 = document.getElementById('h33')
const h43 = document.getElementById('h43')
const dot4 = document.getElementById('dot4')

const h34 = document.getElementById('h34')
const h44 = document.getElementById('h44')
const dot5 = document.getElementById('dot5')

const h35 = document.getElementById('h35')
const h45 = document.getElementById('h45')
const dot6 = document.getElementById('dot6')

const h36 = document.getElementById('h36')
const h46 = document.getElementById('h46')
const dot7 = document.getElementById('dot7')

const h37 = document.getElementById('h37')
const h47 = document.getElementById('h47')

window.addEventListener('scroll', function() {
    const scrolly = window.scrollY || this.window.pageYOffset
    const screenWidth = window.innerWidth;


    if(scrolly >= 1000 && screenWidth <= 430) {
        vertical_line.style.height = '820px'
        vertical_line.style.transition = 'all 8s'
        h31.style.opacity = '1'
        h31.style.transition = 'all 1s .3s'
        h41.style.opacity = '1'
        h41.style.transition = 'all 1s .6s'
        dot2.style.opacity = '1'
        dot2.style.transition = 'all 1s .5s'

        h32.style.opacity = '1'
        h32.style.transition = 'all 1s 1s'
        h42.style.opacity = '1'
        h42.style.transition = 'all 1s 1.3s'
        dot3.style.opacity = '1'
        dot3.style.transition = 'all 1s 1s'

        h33.style.opacity = '1'
        h33.style.transition = 'all 1s 1.7s'
        h43.style.opacity = '1'
        h43.style.transition = 'all 1s 2s'
        dot4.style.opacity = '1'
        dot4.style.transition = 'all 1s 2s'

        h34.style.opacity = '1'
        h34.style.transition = 'all 1s 2.4s'
        h44.style.opacity = '1'
        h44.style.transition = 'all 1s 2.7s'
        dot5.style.opacity = '1'
        dot5.style.transition = 'all 1s 3s'

        h35.style.opacity = '1'
        h35.style.transition = 'all 1s 3.1s'
        h45.style.opacity = '1'
        h45.style.transition = 'all 1s 3.1s'
        dot6.style.opacity = '1'
        dot6.style.transition = 'all 1s 4s'

        h36.style.opacity = '1'
        h36.style.transition = 'all 1s 3.8s'
        h46.style.opacity = '1'
        h46.style.transition = 'all 1s 4.1s'
        dot7.style.opacity = '1'
        dot7.style.transition = 'all 1s 6s'

        h37.style.opacity = '1'
        h37.style.transition = 'all 1s 5.5s'
        h47.style.opacity = '1'
        h47.style.transition = 'all 1s 5.8s'
    }

    if(scrolly >= 1200 && screenWidth > 430) {
        vertical_line.style.width = '1120px'
        vertical_line.style.transition = 'all 8s'
        h31.style.opacity = '1'
        h31.style.transition = 'all 1s .3s'
        h41.style.opacity = '1'
        h41.style.transition = 'all 1s .6s'
        dot2.style.opacity = '1'
        dot2.style.transition = 'all 1s .5s'

        h32.style.opacity = '1'
        h32.style.transition = 'all 1s 1s'
        h42.style.opacity = '1'
        h42.style.transition = 'all 1s 1.3s'
        dot3.style.opacity = '1'
        dot3.style.transition = 'all 1s 1s'

        h33.style.opacity = '1'
        h33.style.transition = 'all 1s 1.7s'
        h43.style.opacity = '1'
        h43.style.transition = 'all 1s 2s'
        dot4.style.opacity = '1'
        dot4.style.transition = 'all 1s 2s'

        h34.style.opacity = '1'
        h34.style.transition = 'all 1s 2.4s'
        h44.style.opacity = '1'
        h44.style.transition = 'all 1s 2.7s'
        dot5.style.opacity = '1'
        dot5.style.transition = 'all 1s 3s'

        h35.style.opacity = '1'
        h35.style.transition = 'all 1s 3.1s'
        h45.style.opacity = '1'
        h45.style.transition = 'all 1s 3.1s'
        dot6.style.opacity = '1'
        dot6.style.transition = 'all 1s 4s'

        h36.style.opacity = '1'
        h36.style.transition = 'all 1s 3.8s'
        h46.style.opacity = '1'
        h46.style.transition = 'all 1s 4.1s'
        dot7.style.opacity = '1'
        dot7.style.transition = 'all 1s 6s'

        h37.style.opacity = '1'
        h37.style.transition = 'all 1s 5.5s'
        h47.style.opacity = '1'
        h47.style.transition = 'all 1s 5.8s'
    }

    
})