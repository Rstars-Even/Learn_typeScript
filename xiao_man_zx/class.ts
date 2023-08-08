interface Options {
    el: string | HTMLElement
}

interface VueCls {
    options: Options
    init(): void
}

class Vue implements VueCls {
    options: Options
    constructor(options: Options) {
        this.options = options
    }
    init(): void {}
}

new Vue({
    el: '#app',
})

class Person {
    name: string
    age: number
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    run() {}
}