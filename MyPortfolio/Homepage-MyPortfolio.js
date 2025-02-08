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

        /* main1*/

let main1Globe = document.querySelector(".main1_location_globe")
window.addEventListener('scroll', () => {
    let y = scrollY;
    main1Globe.style.transform = `rotateZ(${15 + y*0.4}deg)`
})

        /*main4 time */

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


// let marquee_name = document.querySelector(".main1-content-name");
// window.addEventListener('wheel', function (event) {
//     if (event.deltaY > 0) {
//         marquee_name.setAttribute('direction', 'left');
//     } else if (event.deltaY < 0) {
//         marquee_name.setAttribute('direction', 'right');
//     }
// });