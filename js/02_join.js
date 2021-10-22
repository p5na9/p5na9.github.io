const input = document.querySelector("#join1");
const input_One = input.querySelector("input");

const password1 = document.querySelector("#join2");
const password_One = password1.querySelector("input");

const name1 = document.querySelector("#joinName");
const name_One = name1.querySelector("input");

const email1 = document.querySelector("#joinEmail");
const email_One = email1.querySelector("input");

const form = document.querySelector(".inbutton");

// join
function handleSubmitId(event){
    console.log("Start-HandleSubmitId");
    let currentId = input_One.value;
    let currentPassword = password_One.value;
    let currentName = name_One.value;
    let currentEmail = email_One.value;
    const obj = {
        id: currentId,
        pwd: currentPassword,
        name: currentName,
        email: currentEmail
    };
    localStorage.setItem(currentId, currentPassword);   
    localStorage.setItem("obj", JSON.stringify(obj));
    const _obj = localStorage.getItem("obj");
    console.log(JSON.parse(_obj));
}

function init(){
    form.addEventListener("click", handleSubmitId);
    console.log("save!")
}

init();
