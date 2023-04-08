const menubar = document.querySelector(".row-menubar")
let index = 0 
menubar.addEventListener("click",function(){
    menubar.classList.toggle("active")
    document.querySelector(".menu-list").classList.toggle("active")
})
const toP = document.querySelector(".header")
window.addEventListener("scroll",function(){
    const x = this.pageYOffset;
    if(x>80){toP.classList.add("active")}
    else{toP.classList.remove("active")}
})
//-------------------slider-product-----------

const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-product-one-content-items')

rightbtn.addEventListener("click",function(){
    
    index = index+1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-container-list").style.right = index *100 +"%"
})
leftbtn.addEventListener ("click",function(){
    index = index-1
    if(index<=0){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-product-one-content-container-list").style.right = index *100 +"%"
})

