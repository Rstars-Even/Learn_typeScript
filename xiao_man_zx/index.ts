let str:string = '小满'
let num:number = 123
console.log(str);
let b:boolean = true
let n:null = null;
let u:undefined = undefined;

function test():void {
    return
}

let a1:Object = '123'
let a2:Object = 123
let a3:Object = false
let a4:object = {}
let a5:object = []
let a6:object = () => 2134

let b1:object = {name: 1}
// console.log(b1.name);
// b1.name = 2134

interface Inter {
    name: string
    age: number
    [propName: string]: any
}
interface Inter {
    names: string
    b?: number
    readonly id: string
}

let inters:Inter = {
    name: '张三',
    age: 1,
    names: '34',

    a: "213",
    c: "123",
    id: '001',
    sdfw: true
}
inters.age = 18
// inters.id = 18       //报错。
console.log(inters.age);


//继承
interface A {
    name: string
}
interface B extends A {
    age: number
}

let obj: B = {
    age: 18,
    name: "string"
}

//定义函数
interface Fn {
    (name: string):void
}
const fn:Fn = function(rest) {
    // return
}

// let arr:number[] = [1, 2, 3]
let arr:Array<number> = [1, 2, 3]       //泛型
// let arr1:Array<boolean> = [true]

arr.unshift(2)
console.log(arr);

//结合 interface 定义
interface X {
    name: string
    age: number
}
let arr2:X[] = [{
    name: 'John',
    age: 34
},
{
    name: 'Jane',
    age: 40
}]
// let arr2:Array<X> = [{
//     name: 'John',
//     age: 34
// },
// {
//     name: 'Jane',
//     age: 40
// }]

let arr3:number[][] = [[1], [2], [3]]
let arr4:Array<Array<number>> = [[1], [2], [3]]

// let arr5: any[] = [1, 'str', true, {}]
let arr5:[number, string, boolean, {}] = [1, 'str', true, {}]       //元组
