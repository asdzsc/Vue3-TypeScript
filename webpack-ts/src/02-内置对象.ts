// 内置对象
(() => {
    /*1.ECMAScript 的内置对象 */
    let b: Boolean = new Boolean(1)
    let n: Number = new Number(true)
    let s: String = new String('abc')
    let d: Date = new Date()
    let r: RegExp = /^1/
    let e: Error = new Error("error message")
    // let bb: boolean = new Boolean(2)
    // console.log(bb);//不能将类型“Boolean”分配给类型“boolean”。
    console.log(b);
    console.log(n);
    console.log(s)
    console.log(d);
    console.log(r);
    console.log(e);


    const div: HTMLElement | null = document.getElementById('test')
    const divs: NodeList = document.querySelectorAll('div')
    document.addEventListener('click', (event: MouseEvent) => {
        console.dir(event.target);
    })
    const fragment: DocumentFragment = document.createDocumentFragment()
})()