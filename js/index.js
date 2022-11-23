const open = document.getElementById('open');
const close = document.getElementById('close');
const hiddenNav = document.querySelector('.hidden-navbar');

open.addEventListener('click', function(){
    hiddenNav.classList.add('show')
})

close.addEventListener('click', function(){
    hiddenNav.classList.remove('show')
})

