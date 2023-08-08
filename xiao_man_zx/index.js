"use strict";
var strs = '小满';
var num = 123;
console.log(strs);
var b = true;
var n = null;
var u = undefined;
function test() {
    return;
}
var a1 = '123';
var a2 = 123;
var a3 = false;
var a4 = {};
var a5 = [];
var a6 = function () { return 2134; };
var b1 = { name: 1 };
var inters = {
    name: '张三',
    age: 1,
    names: '34',
    a: "213",
    c: "123",
    id: '001',
    sdfw: true
};
inters.age = 18;
// inters.id = 18       //报错。
console.log(inters.age);
var obj = {
    age: 18,
    name: "string"
};
// const fn:Fn = function(rest) {
// return
// }
// let arr:number[] = [1, 2, 3]
var arr = [1, 2, 3]; //泛型
// let arr1:Array<boolean> = [true]
arr.unshift(2);
console.log(arr);
var arr2 = [{
        name: 'John',
        age: 34
    },
    {
        name: 'Jane',
        age: 40
    }];
// let arr2:Array<X> = [{
//     name: 'John',
//     age: 34
// },
// {
//     name: 'Jane',
//     age: 40
// }]
var arr3 = [[1], [2], [3]];
var arr4 = [[1], [2], [3]];
// let arr5: any[] = [1, 'str', true, {}]
var arr5 = [1, 'str', true, {}]; //元组
//注意，参数不能多传，也不能少传 必须按照约定的类型来
var fns = function (name, age) {
    return name + age;
};
fns('张三', 18);
//通过?表示该参数为可选参数
var fn = function (name, age) {
    return name + age;
};
fn('张三');
function getUserInfo(user) {
    return user;
}
console.log(getUserInfo({ name: 'John', age: 18 }));
var user = [1, 2, 3, 4, 5];
function findNum(ids) {
    if (typeof ids === 'number') {
        return user.filter(function (v) { return v === ids; });
    }
    else if (Array.isArray(ids)) {
        user.push.apply(user, ids);
        return user;
    }
    else {
        return user;
    }
}
// console.log(findNum());             //[1, 2, 3, 4, 5]
// console.log(findNum(4));            //[ 4 ]
// console.log(findNum([6, 6]));    //[1, 2, 3, 4, 5, 6, 6]
// 联合类型支持座机字符串
var myPhone = '010-820';
// let myPhones: number | true = '010-820'
// 函数使用联合类型、
var fnc = function (something) {
    return !!something;
};
var xiaoman = function (man) {
    // console.log(man.age)
    // console.log(man.height)
    // console.log(man.sex)
};
xiaoman({ age: 18, height: 180 });
var fnss = function (type) {
    return type.run;
};
// (window as any).abc = 123;
// console.log((window as any).abc);
var fun = function (type) {
    return type;
};
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
var body = document.body;
var allDiv = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
var div = document.querySelector('div');
