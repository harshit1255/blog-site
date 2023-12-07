console.log('hello world');
let menu = document.getElementById('menu')
let menustate = false;
menu.addEventListener('click',()=>
{   
    if(menustate===false)
    {
        document.querySelector('nav').style.display='block'
        menustate=true;
    }
    else
    {
        document.querySelector('nav').style.display='none'
        menustate=false}
})