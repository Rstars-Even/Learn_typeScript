let strs:string = '小满'
let num:number = 123
console.log(strs);
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
// const fn:Fn = function(rest) {
    // return
// }

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


//注意，参数不能多传，也不能少传 必须按照约定的类型来
const fns = (name: string, age: number): string => {
    return name + age
}
fns('张三', 18)

//通过?表示该参数为可选参数
const fn = (name: string, age?: number): string => {
    return name + age
}
fn('张三')


interface User {
    name: string;
    age: number;
}
function getUserInfo(user: User): User {
    return user
}
console.log(getUserInfo({name: 'John', age: 18}));


let user:number[] = [1, 2, 3, 4, 5]

function findNum(ids?: number | number[]): number[]{
    if (typeof ids === 'number') {
        return user.filter(v => v === ids)
    } else if (Array.isArray(ids)) {
        user.push(...ids)
        return user
    } else {
        return user
    }
}
// console.log(findNum());             //[1, 2, 3, 4, 5]
// console.log(findNum(4));            //[ 4 ]
// console.log(findNum([6, 6]));    //[1, 2, 3, 4, 5, 6, 6]

// 联合类型支持座机字符串
let myPhone: number | string = '010-820'
// let myPhones: number | true = '010-820'

// 函数使用联合类型、
const fnc = (something: number | boolean): boolean => {
    return !!something
}
// console.log('---------', fnc(true));
// console.log('---------', fnc(0));
// console.log('---------', fnc(1));

interface People {
    age: number,
    height: number
}
interface Man {
    // sex: string
}
const xiaoman = (man: People & Man) => {
    // console.log(man.age)
    // console.log(man.height)
    // console.log(man.sex)
}
xiaoman({ age: 18, height: 180});


interface A1 {
    run: string
}
interface B1 {
    build: string
}
const fnss = (type: A1 | B1): string => {
    return (<A1>type).run
}


// (window as any).abc = 123;

// console.log((window as any).abc);

const fun = (type: any): boolean => {
    return type as boolean
}
// console.log(fun(1));        //1

// let b9: Boolean = new Boolean(1)
// console.log(b)
// let n9: Number = new Number(true)
// console.log(n)
// let s: String = new String('哔哩哔哩关注小满zs')
// console.log(s)
// let d: Date = new Date()
// console.log(d)
// let r: RegExp = /^1/
// console.log(r)
// let e: Error = new Error("error!")
// console.log(e)


let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div: HTMLElement = document.querySelector('div') as HTMLDivElement