burger=document.querySelector('.burger')
navBar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navBar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
})
