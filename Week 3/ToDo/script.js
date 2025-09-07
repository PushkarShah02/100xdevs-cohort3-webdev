function Addtodo(){
    let div = document.createElement("div");
    let innerEle=todo.value;
    div.setAttribute("id",innerEle)
    div.innerHTML=`<div>${innerEle}</div><button onclick="deletetodo('${innerEle}')">Delete</button>`;
    const mainbody=document.querySelector("body");
    mainbody.appendChild(div);
};

function deletetodo(id){
    const ele=document.getElementById(id)
    ele.parentNode.removeChild(ele);
}

