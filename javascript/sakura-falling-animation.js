const sakura1 = document.getElementById('sakura-1')
const sakura2 = document.getElementById('sakura-2')
const sakura3 = document.getElementById('sakura-3')

window.addEventListener('scroll', function(){
    const scrolly = scrollY || window.pageYOffset

    console.log(scrolly);

    if (scrolly > 400){
        sakura1.classList.add('sakura-1-animation')
        sakura2.classList.add('sakura-2-animation')
        sakura3.classList.add('sakura-3-animation')
    } 
})