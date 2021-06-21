const allTreeLi = tree.querySelectorAll("li");

 for (let li of allTreeLi) {
    let span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling); 
 }


 tree.addEventListener("click",(e) => {
    if (e.target.tagName != "SPAN") {
      return;
    }
    let childrenUl = e.target.parentNode.querySelector("ul");
    if (!childrenUl) { // no children
        return;
    }  
    childrenUl.hidden = !childrenUl.hidden;
 });