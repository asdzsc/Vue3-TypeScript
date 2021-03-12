import './02-内置对象'
document.write("hello")
let btn = document.querySelector("button") as HTMLButtonElement

(btn as HTMLButtonElement).onclick = function () {
    window.location.href = "https://www.baidu.com";
}