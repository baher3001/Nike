var inputs = document.querySelectorAll('.form-control');
let icons = document.querySelectorAll('i');

for(let i=0;i<inputs.length;i++)
{
    inputs[i].onblur=function(e)
    {
        if(e.target.value.length<4)
        {
            e.target.nextElementSibling.style.display="block";
        }else
        {
            e.target.nextElementSibling.style.display="none";

        }        
    }
}

icons[0].onclick = function()
{
    icons[0].style.display="none";
    icons[1].style.display="block";
    inputs[1].type="text";
}
icons[1].onclick = function()
{
    icons[1].style.display="none";
    icons[0].style.display="block";
    inputs[1].type="password";
}