let fadeInTarget = document.querySelectorAll('.fade-in');

for (let i = 0; i < fadeInTarget.length; i++){

    window.addEventListener('scroll', function(){
        
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 50){
            fadeInTarget[i].classList.add('scroll-in');
        }
        
        else{
            fadeInTarget[i].classList.remove('scroll-in');
        }
        
    });
}
