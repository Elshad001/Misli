const chevronRight=document.querySelector('#chevron-right');
const menuDown=document.querySelector('.menu-down');
const chevronLeft=document.querySelector('#chevron-left');

let scrollAmount=30;
chevronRight.addEventListener('click',()=>
{
    
    menuDown.scrollLeft+=scrollAmount;
    chevronLeft.style.display='block';
})


chevronLeft.addEventListener('click',()=>
{
    menuDown.scrollLeft-=scrollAmount;
    if(menuDown.scrollLeft===0)
    {
        chevronLeft.style.display='none';
    }
    
})


let images=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
let slider=document.querySelector('#slider');
let duration=3000;
let i=0;

function imgslide()
{
    slider.style.backgroundImage=`url(${images[i]})`;

    if(i<images.length-1)
    {
        i++
    }
    else
    {
        i=0
    }
    setTimeout('imgslide()',duration);
}
window.onload=imgslide;

let daxilOl=document.querySelector("#daxilol");
let backIcon=document.querySelector('#backicon');
let loginBtn1=document.querySelector('#login-btn1')
let loginBtn2=document.querySelector('#login-btn2');