        /*preloader */

let preloader = document.querySelector(".preloader")
window.addEventListener("load", function(){
    preloader.style.display = "none"
})

        /*mode*/

let modeBtn = document.querySelector(".mode-btn")
let paletteBox = document.querySelector(".palette-box")
let root = document.querySelector(':root')
let palette1 = document.querySelector(".palette_1")
let palette2 = document.querySelector(".palette_2")
let palette3 = document.querySelector(".palette_3")
let mode_count=0
modeBtn.children[1].style.display = 'none'
modeBtn.addEventListener('click', () => {
mode_count++;
if(mode_count == 2){
mode_count = 0
}
if(mode_count == 1){
paletteBox.style.display = 'flex'
modeBtn.children[0].style.display = 'none'
modeBtn.children[1].style.display = 'block'
}
else{
paletteBox.style.display = 'none'
modeBtn.children[0].style.display = 'block'
modeBtn.children[1].style.display = 'none'
}
})
palette1.addEventListener('click', () => {
root.style.setProperty('--main-font-color-2', 'black')
root.style.setProperty('--main-background', 'white')
root.style.setProperty('--main-background-item', 'white')
palette1.style.border = '2px solid var(--main-font-color-2)'
palette2.style.border = 'none'
palette3.style.border = 'none'
})
palette2.addEventListener('click', () => {
root.style.setProperty('--main-font-color-2', '#ca8f0e')
root.style.setProperty('--main-background', '#0A1828')
root.style.setProperty('--main-background-item', '#102741')
palette1.style.border = 'none'
palette2.style.border = '2px solid var(--main-font-color-2)'
palette3.style.border = 'none'
})
palette3.addEventListener('click', () => {
root.style.setProperty('--main-font-color-2', '#93B1A6')
root.style.setProperty('--main-background', '#040D12')
root.style.setProperty('--main-background-item', '#183D3D')
palette1.style.border = 'none'
palette2.style.border = 'none'
palette3.style.border = '2px solid var(--main-font-color-2)'
})

        /*navbar3*/

let navbar3 = document.querySelector(".navbar-3");
let openCloseBtn = document.querySelector(".open-close-btn");
let openSign = document.querySelector(".open-sign");
let closeSign = document.querySelector(".close-sign");
let closeBtn = document.querySelector(".close-btn");

let openCloseCount = 0;
openCloseBtn.addEventListener('click', () => {
    openCloseCount++;
    if(openCloseCount == 2){
        openCloseCount = 0;
    }
    if(openCloseCount == 0){
        navbar3.style.transform = 'translateX(100%)';
        openSign.style.display = 'block';
        closeSign.style.display = 'none';
    }
    if(openCloseCount == 1){
        navbar3.style.transform = 'translateX(0)'
        openSign.style.display = 'none';
        closeSign.style.display = 'block';
    }
})

let tags = document.querySelectorAll(".tags");
for(let tag of tags){
    tag.addEventListener('click', () => {
        if(tag.childElementCount == 2){
            if(tag.children[1].classList.contains('tags_ddm')){
                let tags_ddm = tag.querySelector(".tags_ddm");
                if(tags_ddm.style.display == 'block'){
                    tags_ddm.style.display = 'none';
                }
                else{
                    tags_ddm.style.display = 'block';
                }
            }
        }
    })
}

        /*main1*/

let main1Back = document.querySelector(".main1-back")
let main1Next = document.querySelector(".main1-next")
let main1_1 = document.querySelector(".main1-1")
let main1_2 = document.querySelector(".main1-2")
let main1_3 = document.querySelector(".main1-3")
let dot1 = document.querySelector(".main1-dot1")
let dot2 = document.querySelector(".main1-dot2")
let dot3 = document.querySelector(".main1-dot3")
let b=1
let n=1
main1Back.addEventListener('click', () => {
b--;
if(b==0){
b=3
}
if(b==1){
main1_1.style.display = 'block'
main1_2.style.display = 'none'
main1_3.style.display = 'none'
dot1.style.background = 'rgb(213, 84, 0)'
dot2.style.background = 'rgb(0, 0, 0, 0.3)'
dot3.style.background = 'rgb(0, 0, 0, 0.3)'
}
if(b==2){
main1_1.style.display = 'none'
main1_2.style.display = 'block'
main1_3.style.display = 'none'
dot1.style.background = 'rgb(0, 0, 0, 0.3)'
dot2.style.background = 'rgb(213, 84, 0)'
dot3.style.background = 'rgb(0, 0, 0, 0.3)'
}
if(b==3){
main1_1.style.display = 'none'
main1_2.style.display = 'none'
main1_3.style.display = 'block'
dot1.style.background = 'rgb(0, 0, 0, 0.3)'
dot2.style.background = 'rgb(0, 0, 0, 0.3)'
dot3.style.background = 'rgb(213, 84, 0)'
}
})
main1Next.addEventListener('click', () => {
n++;
if(n==4){
n=1
}
if(n==1){
main1_1.style.display = 'block'
main1_2.style.display = 'none'
main1_3.style.display = 'none'
dot1.style.background = 'rgb(213, 84, 0)'
dot2.style.background = 'rgb(0, 0, 0, 0.3)'
dot3.style.background = 'rgb(0, 0, 0, 0.3)'
}
if(n==2){
main1_1.style.display = 'none'
main1_2.style.display = 'block'
main1_3.style.display = 'none'
dot1.style.background = 'rgb(0, 0, 0, 0.3)'
dot2.style.background = 'rgb(213, 84, 0)'
dot3.style.background = 'rgb(0, 0, 0, 0.3)'
}
if(n==3){
main1_1.style.display = 'none'
main1_2.style.display = 'none'
main1_3.style.display = 'block'
dot1.style.background = 'rgb(0, 0, 0, 0.3)'
dot2.style.background = 'rgb(0, 0, 0, 0.3)'
dot3.style.background = 'rgb(213, 84, 0)'
}
})