// enum Types {
//     Red,
//     Green,
//     Blue,
// }

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

enum Color {
    names = '张三'
}
interface AA {
    names: Color.names
}
let objs: AA = { names: Color.names }

let s = "张三"
s = "345"

type a = 1 extends any ? 1 : 0 //1

type a1 = 1 extends never ? 1 : 0 //0

type a2 = 1 extends number ? 1 : 0 //1

type value = boolean | 0 | '213'
let ss: value = 0

type xiao = '小满' | '中满' | '大满'

function xiao(val: xiao) {
    switch (val) {
        case '小满':
            break
        case '中满':
            break
        case '大满':
            break
        default:
            const error: never = val
            return error
    }
}
// console.log(xiao('324'));


function xiaoman<T>(a:T, b:T):Array<T> {
    return [a, b]
}
xiaoman(1, 2)
xiaoman('1', '2')               //动态类型。
xiaoman(false, true)            //


function add<T = number, K = number>(a:T, b:K):Array<T | K> {       //给定默认类型。
    return [a, b]
}
add(false, 1)
add(false, '1')

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let o = {a: 1, b: 2, c: 3}
prop(o, 'a')
// prop(o, 'd')

//在类型后面跟一个 extends 再跟一个约束的类型
function add2<T extends number>(a:T, b:T) {
    return a + b
}
add2(1, 2)
// add2('j', "6")

interface Len {
    length: number
}
function add3<T extends Len>(a: T) {
    a.length
}
add3('11111111')
add3([1, 2, 3])
// add3(false)
// add3(11111111)