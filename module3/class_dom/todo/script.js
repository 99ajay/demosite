let inputtag=document.querySelector("input");
let ulTag = document.querySelector("ul");
inputtag.addEventListener('keydown',function(e)
{
    //console.log(e);
    let key=e.key;
    if(key=='Enter')
    {
        let value=inputtag.value;
        console.log(value);
        inputtag.value="";
        let liTag = document.createElement("li");
        //liTag.innerText = value;
        liTag.innerHTML = `<div>${value}</div>
        <div class="delete"><i class="fa fa-trash"></i></div>`
              //liTag.innerHTML = "<div>"+value+"</div><div><i class='fa fa-trash'></i></div>"
        handleremoval(liTag);
        ulTag.appendChild(liTag);
    }
})

    function handleremoval(liTag)
    {
        let deletediv=liTag.querySelector(".delete");
        deletediv.addEventListener("click",function()
        {
            liTag.remove();
        })
    }
