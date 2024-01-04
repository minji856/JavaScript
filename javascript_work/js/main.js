/*
import number, {hello, str as name, func /*arr/* } from './module.js' //양쪽 다 설정해줘야함
// 자주사용하는거 데려오기 {}생략

const parent = document.querySelector('.parent')
console.log(parent.innerHTML)
console.log(hello)  // 같은 파일이면 데이터를 가져올 수 있지만
console.log(number)  // 123
console.log(name)  = console.log(str) {str as name}
console.log(func)*/
//console.log(arr) 필요없는건 그냥 빼버리면 된다 {arr} 지우기

/* 여러 변수 불러올때 */
/*
import * as mod from './module.js'

console.log(mod.default)
console.log(mod.hello)
console.log(mod.str)
console.log(mod.arr)
console.log(mod.func)
*/

// import {a} from './a.js'
// import {b} from './b.js'
import {a, b} from './util.js'

console.log(a())
console.log(b())