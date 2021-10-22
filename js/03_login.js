
// login
const check_1 = document.querySelector("#login1");
const check_id = check_1.querySelector("input");
const check_2 = document.querySelector("#login2");
const check_password = check_2.querySelector("input");
const loginBtn = document.querySelector(".loginbutton");
const clearBtn = document.querySelector(".Clearbutton");

function CheckValue(){
    const ID = check_id.value;
    const PASSWORD = check_password.value;
    if(localStorage.getItem(ID) == PASSWORD){
        alert("로그인 완료!");
    }else{
        alert("로그인 실패! 정보를 다시 확인해주세요.");
    }
}
function clearLocal(){
    localStorage.clear();
}
function init2(){
    loginBtn.addEventListener("click", CheckValue);
    clearBtn.addEventListener("click", clearLocal);
}
init2();

