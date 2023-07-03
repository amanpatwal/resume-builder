
function addNewWEField(){
    
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("placeholder","Enter here");
    newNode.setAttribute("rows",4);
    newNode.setAttribute("cols",55);



    let weOb=document.getElementsById("we");
    let weAddButtonOb=document.getElementsById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("placeholder","Enter here");
    newNode.setAttribute("rows",4);
    newNode.setAttribute("cols",55);



    let aqOb=document.getElementsById("aq");
    let aqAddButtonOb=document.getElementsById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}