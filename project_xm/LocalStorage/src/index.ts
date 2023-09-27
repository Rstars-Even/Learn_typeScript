import { StorageCls, Key, Expire, Data, Result, Evenet, List } from "./type";
import { Dictionaries } from "./enum";

// export class Storage implements StorageCls {
//     set <T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
//         const data = {
//             value,
//             [Dictionaries.expire]: expire   //过期时间。
//         }
//         localStorage.setItem(key, JSON.stringify(data));
//     }

//     get <T>(key: Key): Result<T> | null {
//         const value = localStorage.getItem(key);
//         if (value) {
//             const data: Data<T> = JSON.parse(value);
//             const now = new Date().getTime();
//             // 判断时间是否过期。
//             if (typeof data[Dictionaries.expire] == 'number' && data[Dictionaries.expire] < now) {
//                 this.remove(key)
//                 return {
//                     message: `你的${key}已过期`,
//                     value: null
//                 }
//             } else {
//                 return {
//                     message: "成功！",
//                     value: data.value
//                 }
//             }
//         } else {
//             return {
//                 message: "值无效！",
//                 value: null
//             }
//         }
//     }

//     remove (key: Key) {
//         localStorage.removeItem(key);
//     }

//     clear () {
//         localStorage.clearItem()
//     };
// }




class Dispatch implements Evenet {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, fn: Function) {
        const callback = this.list[name] || []
        callback.push(fn)
        this.list[name] = callback
    }
    emit(name: string, ...args: Array<any>) {
        let eventName = this.list[name]
        if (eventName) {
            eventName.forEach(fn => {
                fn.apply(this, args)
            })
        } else {
            console.log(`------------名称错误。￥${name}--------------`);
        }
    }
    off(name: string, fn: Function) {
        let eventName = this.list[name]
        if (eventName && fn) {
            let index = eventName.findIndex(fns => fns === fn)
            eventName.splice(index, 1)
        } else {
            console.log(`-----名称错误----${name}-------`)
        }
    }
    once(name: string, fn: Function) {
        let de = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, de)
        }
        this.on(name, de)
    }
}

const o = new Dispatch()
o.on('post', (...args: Array<any>) => {
    console.log(args, 1)
})
const fn = (...args: Array<any>) => {
    console.log(args, 2)
}
o.on('post', fn)

// o.off("post", fn)
o.emit('post', 1, false, { name: '小满' })