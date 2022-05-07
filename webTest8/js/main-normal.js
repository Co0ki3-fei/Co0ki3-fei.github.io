const p_img00 = "url(./img/img-00.png)"
const p_img01 = "url(./img/img-01.jpg)"
const p_img02 = "url(./img/img-02.jpg)"
const p_img03 = "url(./img/img-03.png)"
const p_img04 = "url(./img/img-04.jpg)"
const p_img05 = "url(./img/img-05.png)"
const p_img06 = "url(./img/img-06.png)"
const p_img07 = "url(./img/img-07.png)"
const p_img08 = "url(./img/img-08.png)"
const p_img09 = "url(./img/img-09.png)"
const e_img00 = document.getElementById("img00")
const e_img01 = document.getElementById("img01")
const e_img02 = document.getElementById("img02")
const e_img03 = document.getElementById("img03")
const e_img04 = document.getElementById("img04")
const e_img05 = document.getElementById("img05")
const e_img06 = document.getElementById("img06")
const e_img07 = document.getElementById("img07")
const e_img08 = document.getElementById("img08")
const e_img09 = document.getElementById("img09")
const bigImg = document.getElementById("bigImg")
const bt1 = document.getElementById("bt1")
const bt2 = document.getElementById("bt2")
const bt3 = document.getElementById("bt3")
const tb1 = document.getElementById("m-tb1")
const tb2 = document.getElementById("m-tb2")
const tb3 = document.getElementById("m-tb3")
const addLine = document.getElementById("u-add")
const mList = document.getElementById("m-list")

const ImagesPath = {
    0:p_img00, 1:p_img01, 2:p_img02, 3:p_img03, 4:p_img04, 5:p_img05, 6:p_img06, 7:p_img07, 8:p_img08, 9:p_img09
}
const Elements = {
    0: e_img00, 1: e_img01, 2:e_img02, 3:e_img03, 4:e_img04, 5:e_img05, 6:e_img06, 7:e_img07, 8:e_img08, 9:e_img09, bigImg
}
const tabs = {
    0:tb1, 1:tb2, 2:tb3
}

function imgBigger(path, point){
    bigImg.style.backgroundImage = path
    bigImg.style.backgroundSize = "cover"
    bigImg.style.top = point.y
    bigImg.style.left = point.x
}

function getMousePosition(event){
    let mouseX = event.clientX + 20;
    let mouseY = event.clientY;
    return { x: mouseX, y: mouseY }
}

function init(){
    for (let i = 0; i < 10; i++){
        Elements[i].style.backgroundImage = ImagesPath[i]
        Elements[i].style.backgroundSize = "cover";
        Elements[i].onclick = (event)=>{
            let path = ImagesPath[i]
            let point = getMousePosition(event)
            imgBigger(path, point)
        }
    }
    bt1.onclick = (event)=>{
        tabs[0].style.display = "flex"
        tabs[1].style.display = "none"
        tabs[2].style.display = "none"
        bigImg.style.display = "block"
        bt1.style.background = "rgb(144, 144, 144)"
        bt2.style.background = "rgb(200, 200, 200)"
        bt3.style.background = "rgb(200, 200, 200)"
    }
    bt2.onclick = (event)=>{
        tabs[0].style.display = "none"
        tabs[1].style.display = "block"
        tabs[2].style.display = "none"
        bigImg.style.display = "none"
        bt1.style.background = "rgb(200, 200, 200)"
        bt2.style.background = "rgb(144, 144, 144)"
        bt3.style.background = "rgb(200, 200, 200)"
    }
    bt3.onclick = (event)=>{
        tabs[0].style.display = "none"
        tabs[1].style.display = "none"
        tabs[2].style.display = "block"
        bigImg.style.display = "none"
        bt1.style.background = "rgb(200, 200, 200)"
        bt2.style.background = "rgb(200, 200, 200)"
        bt3.style.background = "rgb(144, 144, 144)"
    }
    for (let i = 0; i < 3; i++){
        tabs[i].style.display = "none"
    }
    bigImg.style.display = "none"
    addLine.onclick = (event)=>{
        let newLi = document.createElement("li")
        let newInput = document.createElement('input')
        let newBtnS = document.createElement('button')
        newInput.type = "text"
        newBtnS.textContent = 'Delete'
        newBtnS.onclick = ()=>{
            newBtnS.parentNode.parentNode.removeChild(newBtnS.parentNode)
        }
        mList.appendChild(newLi)
        newLi.appendChild(newInput)
        newLi.appendChild(newBtnS)
    }
}

function mainNormal(){
    init()
}

mainNormal();