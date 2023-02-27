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


