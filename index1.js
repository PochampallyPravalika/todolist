let btn = document.getElementById("btn");
let input = document.getElementById("input");
let main = document.getElementById("main");

btn.addEventListener("click", function () {
    let div = document.createElement("div");
    div.id = "ctn";
    // div.innerText = input.value;

    let span = document.createElement("span");
    span.innerText = input.value;
    div.appendChild(span);

    let button = document.createElement("button");
    button.id="btn1"
    button.className = "btn btn-outline-danger";

    button.innerText = "Delete";
    div.appendChild(button);

    button.addEventListener("click", function () {
        div.remove();
    })

    let button1=document.createElement("button");
    button1.id="btn2"
    button1.className = "btn btn-outline-warning";

    button1.innerText="edit text"
    div.appendChild(button1);

    button1.addEventListener("click",function(){
        span.contentEditable=true;
        span.focus();
    })
    main.appendChild(div);
})