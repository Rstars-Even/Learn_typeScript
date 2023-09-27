// expire 过期时间 key ，permanent 永久不过期，
import { Dictionaries } from '../enum'

export type Key = string
export type Expire = Dictionaries.permanent | number //时间戳或者是：Dictionaries.permanent

export interface Result <T>{
    message: string
    value: T | null
}
export interface Data <T>{
    value: T;
    [Dictionaries.expire]: Expire;
}
export interface StorageCls {
    get: <T>(key: Key) => void
    set: <T>(key: Key, value: T, expires: Expire) => void
    remove: (key: Key) => void
    clear: () => void
}



export interface Evenet {
    on: (name: string, fn: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void
    once: (name: string, fn: Function) => void
}
export interface List {
    [key: string]: Array<Function>
}