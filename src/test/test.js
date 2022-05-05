import string from './css.js'
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n)
console.log(n)

const x = ()=>{
    n +=1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
        console.log(n + ':' + string
    .substr(0, n))
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}

let id = setInterval(() => {
   x()
}, 0)

btnPause.onclick = ()=>{
    window.clearInterval(id)
}
btnPlay.onclick =()=>{
    id=setInterval(()=>{

    },0)
}