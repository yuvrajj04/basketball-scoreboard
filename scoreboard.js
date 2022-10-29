let scorehome = document.getElementById("scoreHome")
let scoreH =0
let scoreguest = document.getElementById("scoreGuest")
let scoreG=0

function addOneHome(){
    scoreH +=1
    scorehome.textContent=scoreH
}
function addTwoHome(){
    scoreH +=2
    scorehome.textContent=scoreH
}
function addThreeHome(){
    scoreH +=3
    scorehome.textContent=scoreH
}
function addOneGuest(){
    scoreG +=1
    scoreguest.textContent=scoreG
}
function addTwoGuest(){
    scoreG +=2
    scoreguest.textContent=scoreG
}
function addThreeGuest(){
    scoreG +=3
    scoreguest.textContent=scoreG
}