// enum Types {
//     Red,
//     Green,
//     Blue,
// }

import { get } from "http"
import { type } from "os"

// enum Types {
//     Red = 1,
//     Green,
//     Blue
// }

// enum Types {
//     Red = 'red',
//     Green = '0',
//     Blue = 'blue'
// }
// console.log(Types.Red);         //0
// console.log(Types.Green);       //1
// console.log(Types.Blue);        //2

// enum Color {
//     names = '张三'
// }
// interface AA {
//     names: Color.names
// }
// let objs: AA = { names: Color.names }

// let s = "张三"
// s = "345"

// type a = 1 extends any ? 1 : 0 //1

// type a1 = 1 extends never ? 1 : 0 //0

// type a2 = 1 extends number ? 1 : 0 //1

// type value = boolean | 0 | '213'
// let ss: value = 0

// type xiao = '小满' | '中满' | '大满'

// function xiao(val: xiao) {
//     switch (val) {
//         case '小满':
//             break
//         case '中满':
//             break
//         case '大满':
//             break
//         default:
//             const error: never = val
//             return error
//     }
// }
// // console.log(xiao('324'));


// function xiaoman<T>(a:T, b:T):Array<T> {
//     return [a, b]
// }
// xiaoman(1, 2)
// xiaoman('1', '2')               //动态类型。
// xiaoman(false, true)            //


// function add<T = number, K = number>(a:T, b:K):Array<T | K> {       //给定默认类型。
//     return [a, b]
// }
// add(false, 1)
// add(false, '1')

// function prop<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key]
// }
// let o = {a: 1, b: 2, c: 3}
// prop(o, 'a')
// // prop(o, 'd')

// //在类型后面跟一个 extends 再跟一个约束的类型
// function add2<T extends number>(a:T, b:T) {
//     return a + b
// }
// add2(1, 2)
// // add2('j', "6")

// interface Len {
//     length: number
// }
// function add3<T extends Len>(a: T) {
//     a.length
// }
// add3('11111111')
// add3([1, 2, 3])
// add3(false)
// add3(11111111)

namespace a {
    export const Time: number = 1000
    // export const fn = <T>(arg: T): T => {
    //     return arg
    // }
    // fn(Time)
}


namespace a {
    export const Times: number = 1000
    // export const fn = <T>(arg: T): T => {
    //     return arg
    // }
    // fn(Time)
}

// console.log(a.Times);
// console.log(b.Times);

interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}

let people1: Name = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }

const people = Object.assign(people1, people2, people3)


// class A {
//     type: boolean = false;
//     changeType() {
//         this.type = !this.type
//     }
// }
// class B {
//     name: string = '张三';
//     getName(): string {
//         return this.name;
//     }
// }

// class C implements A, B {
//     type: boolean
//     changeType: () => void;
//     name: string;
//     getName: () => string
// }
// Mixins(C, [A, B])
// function Mixins(curCls: any, itemCls: any[]) {
//     itemCls.forEach(item => {
//         Object.getOwnPropertyNames(item.prototype).forEach(name => {
//             curCls.prototype[name] = item.prototype[name]
//         })
//     })
// }

// const Base: ClassDecorator = (target) => {
//     console.log(target);
//     target.prototype.xiaoman = '小满'
//     target.prototype.fn = () => {
//         console.log('我是小满。。。');
//     }
// }
// @Base
// class Http {}
// const http = new Http() as any;
// console.log(http.xiaoman);
// http.fn();

const Base = (name: string) => {
    const fn: ClassDecorator = (target) => {
        console.log(target);
        target.prototype.xiaoman = name
        target.prototype.fn = () => {
            console.log('我是小满。。。');
        }
    }
    return fn
}

import axios from 'axios'
const Get = (url: string) => {
    const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
        axios.get(url).then(res => {
            descriptor.value(res.data)
        })
    }
    return fn
}
// @Base('小王')
class Http {
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(data: any) {
        console.log(data.result.list);
    }
}
const http = new Http() as any;
// console.log(http.xiaoman);
// http.fn();