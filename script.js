


   /* let burger = document.getElementById('secret');
    
    let switchBurger = function() {
        burger.style.backgroundColor === "black" ? burger.style.backgroundColor = "red" : burger.style.backgroundColor = "black";
    };
    
    burger.onclick = switchBurger;*/

// http://127.0.0.1:5500/pics/Mobile_menu_icon.png

    let burger = document.getElementById('burgerIcon');
    let menu = document.getElementById('mobileMenu');
    
    let switchBurger = function() {
        document.getElementById("mobileMenu").classList.toggle("show");
        if (burger.src==='http://127.0.0.1:5500/pics/Mobile_menu_icon.png') {burger.src='/pics/Mobile_menu_icon_close.png'} else burger.src='/pics/Mobile_menu_icon.png';
    };
    
    burger.onclick = switchBurger;