let person = {name: "小满", age: 15}

let personProxy = new Proxy(person, {   //只支持传入引用类型数据。对象、数组、函数、set、map
    get (target, key, receiver) {       //取值拦截。。
        if (target.age <= 18) {
            return Reflect.get(target, key, receiver)       //Reflect.get()一种对象的取值方法。
        } else {
            return '小满成年了。'
        }
    },
    /**
     * target: 对象本身
     * key：对象要取的或要改变的属性
     * value: 要改成的值
     * receiver: 一般也是对象本身
     */
    set(target, key, value, receiver) {     //赋值拦截。
        return true     //返回一个布尔值。
    }
})
console.log(personProxy.age);       //15

console.log(Reflect.set(person, 'name', '大满', person));   //true  Reflect.set()修改对象属性值。
console.log(person);    //{ name: "大满", age: 15 }



// 简单版的发布订阅
const list: Set<Function> = new Set();
const autorun = (cb: Function) => {     //订阅者
    if (!list.has(cb)) {
        list.add(cb)
    }
}

const observable = <T extends object>(params: T) => {       //发布者
    return new Proxy(params, {
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            list.forEach(fn => fn())
            return result
        }
    })
}

const personProxys = observable({name: '小王', attr: '威猛先生'})   //监听的数据。
autorun(() => {
    console.log('数据发生了变化。。。');      //在下面改变了两次，所以后台会输出两次。
})

personProxys.attr = '威猛个捶捶'
personProxys.name = 'XXX'