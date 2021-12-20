const clear=document.querySelector(".fa-times");
const btnClose=document.querySelector(".btn_close");
const listItem=document.querySelectorAll(".list__item")
clear.addEventListener("click",()=>{
    document.querySelector(".add-form__input").value="";
})

listItem.forEach(item=>{
    const btnClose=item.querySelector(".btn_close");
    item.addEventListener("click",()=>{
        document.querySelector(".list__item_checked").classList.remove("list__item_checked")
        item.classList.add("list__item_checked");
    })
    btnClose.addEventListener("click",()=>{
        item.style.display="none"
    })
})