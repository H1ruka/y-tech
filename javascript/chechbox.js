const scrollCheckbox = document.getElementById('checkbox');
const body = document.getElementById('body');


scrollCheckbox.addEventListener('change', function () {

    if (this.checked) {
      body.style.overflowY = 'inherit'
      window.scrollTo({
        top: 830,
        behavior: 'smooth' 
      });
    }
});