const topList = document.getElementById('top')
const list = topList.getElementsByTagName('li')
const head = document.getElementById('top-time')
const mBox = document.getElementsByClassName('m-box')
console.log(list)
list[0].onclick = ()=>{
    list[0].style.color = 'red'
    jumpID(0)
}
list[1].onclick = ()=>{
    let date = new Date()
    let mon = date.getMonth() + 1
    let day = date.getDate()
    let tim = date.getFullYear() + '-' + (mon < 10 ? '0' + mon : mon) + '-' + (day < 10 ? '0' + day : day)
    head.textContent = tim
    jumpID(1)
}
list[2].onclick = ()=>{
    for (let i = 0; i < 8; i++){
        list[i].classList.add('fn-active')
    }
    jumpID(2)
}
list[3].onclick = ()=>{
    let node = list[7]
    node.parentNode.removeChild(node)
    jumpID(3)
}
list[4].onclick = ()=>{
    window.location.assign("https://uland.taobao.com/")
    jumpID(4)
}
list[5].onclick = ()=>{
    let newLi = document.createElement('li')
    newLi.textContent = 'p9'
    topList.appendChild(newLi)
    jumpID(5)
}
list[6].onclick = ()=>{
    mBox.clientWidth = window.screen + 'px'
    jumpID(6)
}

function jumpID(id){
    alert(id)
}