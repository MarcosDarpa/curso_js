let a = 3
globalThis.b = 123
this.c = 456
console.log(this.a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)

