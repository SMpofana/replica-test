//Menu open and close
const menuButton = document.querySelector('.hamburger_lines')
const menuButtonLines = Array.from(menuButton.children);
const menuList = document.querySelector(".main_menu")
const menuItems = document.querySelectorAll('.menu_item');
const menu = Array.from(menuItems)
const menuCta = document.querySelector('.header_cta');
const menuCtaButton = menuCta.firstElementChild;
const menuWord = document.getElementById('menu-word');



console.log(menu)

menuButton.addEventListener('click', e=>{
    
    menuList.classList.toggle('active');
    menuCtaButton.classList.toggle('active');

    menuButtonLines.forEach((item)=>{
        item.classList.toggle('active')
    })

    if(menuWord.innerHTML === 'menu'){
        menuWord.innerHTML = 'close';
    }else{
        menuWord.innerHTML = 'menu'
    }

})

menu.forEach((item)=>{

    item.addEventListener('click', e=>{

        menuList.classList.toggle('active');
        menuCtaButton.classList.toggle('active');

        menuButtonLines.forEach((item)=>{
            item.classList.toggle('active')
        })

        if(menuWord.innerHTML === 'menu'){
            menuWord.innerHTML = 'close';
        }else{
            menuWord.innerHTML = 'menu'
        }
        })

})