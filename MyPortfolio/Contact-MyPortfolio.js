        /*open-close button for navbar*/

let openBtn = document.querySelector(".open-btn");
let openBtn2 = document.querySelector(".open-btn2");
let closeBtn = document.querySelector(".close-btn")
let navbarMin = document.querySelector(".navbar-min")

openBtn.addEventListener('click', () => {
    navbarMin.style.transform = 'translateX(0%)'
    navbarMin.style.borderRadius = '0'
})
openBtn2.addEventListener('click', () => {
    navbarMin.style.transform = 'translateX(0%)'
    navbarMin.style.borderRadius = '0'
})
closeBtn.addEventListener('click', () => {
    navbarMin.style.transform = 'translateX(110%)'
    navbarMin.style.borderRadius = '100% 0 0 100%'
})
window.addEventListener('scroll', () => {
    if(scrollY > 100){
        openBtn2.style.scale = '1'
        openBtn2.style.opacity = '1'
    }
    else{
        openBtn2.style.scale = '0'
        openBtn2.style.opacity = '0'
    }
})

let dc_hrs = document.querySelector(".dc-hrs");
let dc_min = document.querySelector(".dc-min");
let dc_sec = document.querySelector(".dc-sec");
let dc_am_pm = document.querySelector(".dc-am-pm");

setInterval(() => {
    let dc_Current_time = new Date();
    let temp_hrs = dc_Current_time.getHours();
    (temp_hrs == 0 ? temp_hrs = 12 : temp_hrs = temp_hrs);
    (temp_hrs > 12 ? temp_hrs = temp_hrs - 12 : temp_hrs = temp_hrs);
    dc_hrs.innerHTML = (temp_hrs < 10 ? "0" : "") + temp_hrs;
    dc_min.innerHTML = (dc_Current_time.getMinutes() < 10 ? "0" : "") + dc_Current_time.getMinutes();
    dc_sec.innerHTML = (dc_Current_time.getSeconds() < 10 ? "0" : "") + dc_Current_time.getSeconds();
    dc_Current_time.getHours() > 12 ? dc_am_pm.innerHTML = 'PM' : dc_am_pm.innerHTML = 'AM';
}, 1000)

        /**send button */

// let sendBtn = document.querySelector(".main-send-btn");
// let mainName = document.querySelector(".main-name");
// let mainNameResp = document.querySelector(".main-name-resp");
// let mainEmail = document.querySelector(".main-email");
// let mainEmailResp = document.querySelector(".main-email-resp");
// let mainMsg = document.querySelector(".main-msg");
// let mainMsgResp = document.querySelector(".main-msg-resp");

// sendBtn.addEventListener('click', () => {
//     if(mainNameResp.value == ''){
//         alert("name");
//     }
//     if(mainEmailResp.value == ''){
//         alert("email");
//     }
//     if(mainMsgResp.value == ''){
//         alert("msg");
//     }
//     if(mainNameResp.value != '' && mainEmailResp.value != '' && mainMsgResp.value != ''){
        
//     }
// })