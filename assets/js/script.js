


var myNav = document.getElementById('costumNav');








window.onscroll = function () { 
    
    if (document.documentElement.scrollTop >= 730  ) {
        myNav.classList.remove("navbar-transparent");
        myNav.classList.add("navbar-opaque");
        
       
    } 

    else {
        myNav.classList.remove("navbar-opaque");
        myNav.classList.add("navbar-transparent");
        

    }






   
};