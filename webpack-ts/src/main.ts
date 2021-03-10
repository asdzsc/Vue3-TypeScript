import './05-泛型/05-泛型约束'
document.write("hello")
let btn = document.querySelector("button") as HTMLButtonElement

(btn as HTMLButtonElement).onclick = function () {
    window.location.href = "https://www.baidu.com";
}