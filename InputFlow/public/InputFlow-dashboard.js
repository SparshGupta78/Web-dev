let authTime = document.querySelector('.auth-time');

let time = new Date();
let hours = time.getHours();
if(hours >= 0 && hours < 12){
    authTime.innerHTML = 'Good  morning,';
} else if (hours >= 12 && hours < 16){
    authTime.innerHTML = 'Good afternoon,';
} else {
    authTime.innerHTML = 'Good evening,';
}