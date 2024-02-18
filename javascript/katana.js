const katana = document.getElementById('katana')
const heading = document.getElementById('heading')
console.log(heading);

window.addEventListener('scroll', function(){
    const scrolly = this.scrollY || this.window.pageYOffset

    if (scrolly >= 2600){
        katana.classList.add('animated-katana');
        heading.classList.add('animated-heading')
    }
    else{

    }
})