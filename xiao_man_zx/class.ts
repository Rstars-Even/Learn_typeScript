// interface Options {
//     el: string | HTMLElement
// }

// interface VueCls {
//     options: Options
//     init(): void
// }

// class Vue implements VueCls {
//     options: Options
//     constructor(options: Options) {
//         this.options = options
//     }
//     init(): void {}
// }

// new Vue({
//     el: '#app',
// })

// class Person {
//     name: string
//     age: number
//     constructor (name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     run() {}
// }

interface Vnode {
    tag: string         //约束标签 div section
    text?: string       //便签里的内容
    children?: Vnode[]  //
}
class Dom {     //简单版虚拟 Dom        父类
    constructor() {}
    private createElement(el: string): HTMLElement {        //创建元素。
        return document.createElement(el);
    }
    //填充文本方法
    private setText(el: HTMLElement, text: string | null) {     //加了 private 关键字的方法，只能在类自己内部使用，子类和实例化对象都不能用。
        el.textContent = text
    }
    //渲染函数。
    protected render(data: Vnode) {                            //protected 代表定义的变量私有的,只能在内部和继承的子类中访问不能在外部访问。
        let root = this.createElement(data.tag)
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item)
                root.appendChild(child)
            })
        } else {
            this.setText(root, data.text ?? null)
        }
        return root
    }
}


interface Option {
    el: string | HTMLElement
}
interface VueCls {
    init(): void
    options: Option
}
class Vue extends Dom implements VueCls {           //子类
    options: Option
    constructor(options: Option) {
        super()
        this.options = options
        this.init()
    }
    public init(): void {                                  //使用 public 修饰符,可以让你定义的变量内部访问,也可以外部访问,如果不写默认就是 public
        let data: Vnode = {
            tag: 'div',
            children: [{
                tag: 'section',
                text: '我是子节点一'
            },{
                tag: 'section',
                text: '我是字节点二'
            }],
        }
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
        app?.appendChild(this.render(data))                //调用父类的方法。
    }
}

new Vue({
    el: "#app"
})
