//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})



//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
    if (this.closet('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//slider - đm configure quài mà nó ko chạy, chảnh thế

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

});


//show department menu

function myFunction() {
    document.getElementById('myDropdown').classList.toggle("show");
}

window.onclick = function(e) {
        if (!e.target.matches('.DropdownBtn')) {
            var dropdowns = document.getElementsByClassName("dpt-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if(!e.target.matches('.dpt-btn')) {
    var myDropdown = document.getElementById("myDropdown");
        if(myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show')
        }
    }
}


function show_hide() {
    var click = document.getElementsByClassName("dpt-menu");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
       click.style.display = "none";
    }
 }

 /* const btn_open = document.getElementById('dpt-btn')
    const list = document.getElementById('myDropdown')

    
    
    

 
 btn_open.addEventListener("click",  function(){
    if(list.style.display = 'none')
    {
        console.log('yes')
    }
        
  });
     */


const btn_drop = document.getElementById('DropdownBtn')
btn_drop.addEventListener("click", myFunc)

function myFunc(){
    const list = document.getElementById('myDropdown')
    console.log(btn_drop)
    if(list.style.display === "none"){
        list.style.display = "block"
    }
    else {
        list.style.display = "none"
    }
}