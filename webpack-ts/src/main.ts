// import './01-基础类型'
// import './02-接口'
// import './03-函数'
// import './04-类类型'
// import './01-类'
// import './02-继承'
// import './03-多肽'
// import './04-修饰符'
// import './05-readonly'
import './06-存取器'
document.write("hello")
let btn = document.querySelector("button") as HTMLButtonElement

(btn as HTMLButtonElement).onclick = function () {
    window.location.href = "https://www.baidu.com";
}