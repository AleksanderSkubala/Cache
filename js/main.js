window.localStorage.clear();
check();

var box = document.querySelector("#name-value");
var input = document.querySelector("#name-input");
var btn = document.querySelector("#name-button");

btn.onclick = ()=>{
    push("name", input.value);
};

function push(key, value) {
    if(check()) {
        window.localStorage.setItem(key, value);
        box.innerHTML = window.localStorage.getItem(key);
    }
}

function check() {
    if(window.localStorage) {
        return true;
    }
    else {
        console.log("Local Storage Not Supported");
        return false;
    }
}
