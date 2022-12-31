function showform(){
    document.querySelector('.loginform').classList.add('showloginform');
}
// function closeform(){
//     document.querySelector('.loginform').classList.remove('showloginform');
// }

var loginbtn=document.querySelector("#loginbtn");
loginbtn.addEventListener("click",showform);

// var closelogin=document.querySelector(".close-btn");
// closelogin.addEventListener("click",closeform);