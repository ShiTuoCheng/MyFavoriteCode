/**
 * Created by shituocheng on 2016/9/15.
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof  window.onload !== oldonload){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}