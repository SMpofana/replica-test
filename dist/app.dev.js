"use strict";

//Menu open and close
var menuButton = document.querySelector('.hamburger_lines');
var menuButtonLines = Array.from(menuButton.children);
var menuList = document.querySelector(".main_menu");
var menuItems = document.querySelectorAll('.menu_item');
var menu = Array.from(menuItems);
var menuCta = document.querySelector('.header_cta');
var menuCtaButton = menuCta.firstElementChild;
var menuWord = document.getElementById('menu-word');
console.log(menu);
menuButton.addEventListener('click', function (e) {
  menuList.classList.toggle('active');
  menuCtaButton.classList.toggle('active');
  menuButtonLines.forEach(function (item) {
    item.classList.toggle('active');
  });

  if (menuWord.innerHTML === 'menu') {
    menuWord.innerHTML = 'close';
  } else {
    menuWord.innerHTML = 'menu';
  }
});
menu.forEach(function (item) {
  item.addEventListener('click', function (e) {
    menuList.classList.toggle('active');
    menuCtaButton.classList.toggle('active');
    menuButtonLines.forEach(function (item) {
      item.classList.toggle('active');
    });

    if (menuWord.innerHTML === 'menu') {
      menuWord.innerHTML = 'close';
    } else {
      menuWord.innerHTML = 'menu';
    }
  });
});