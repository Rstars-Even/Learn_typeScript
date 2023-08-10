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
