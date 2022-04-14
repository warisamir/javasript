let plus=document.querySelector("#plus");
let imgListContainer=document.querySelector(".img-list-container")
let imagshowcontainer=document.querySelector(".img-show_container")
plus.addEventListener("click",function(){
    let person=prompt("please enter img url");
    if(person==null||person==""){
    alert("please enter img src");
    return;
    }
    addImageTOshow(person);
})
function addImageTOshow(person){
let pimg=document.createElement("img")
//
pimg.setAttribute("src",person);
pimg.setAttribute("class","img-preview")
 imgListContainer.appendChild(pimg)
// let finalimg=document.createElement("img");
//pimg.setAttribute("class","img_preview");
let innerHTMLblock=`<div class="img-show_container">
<span class="material-icons"> keyboard_double_arrow_left</span>
    <img class="final_image" src=${person} alt="">
<span class="material-icons">
        keyboard_double_arrow_right</span>`
imagshowcontainer.innerHTML=innerHTMLblock;
}