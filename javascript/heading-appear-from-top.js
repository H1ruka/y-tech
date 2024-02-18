const head = document.getElementById('our-name')

window.addEventListener('scroll', function(){
    const scrolly = this.scrollY || this.pageYOffset

    if (scrolly >= 800){
        head.classList.add('animated-name')
    }
})