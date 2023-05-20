let a = 10
let b = 20
const c = 30
const sum = a + b + c
function sum(a, b, c) {
  return a + b + c
}
sum(a, b, c)
// const sum = (a, b, c) => a + b + c;

const arr = [
  { parent_id: 0, id: 10, name: 'ccc' },
  { parent_id: 0, id: 11, name: 'ccc' },
  { parent_id: 0, id: 12, name: 'ccc' },
  { parent_id: 10, id: 100, name: 'c11' },
  { parent_id: 10, id: 101, name: 'c11' },
  { parent_id: 11, id: 200, name: 'c11' },
  { parent_id: 11, id: 201, name: 'c11' },
  { parent_id: 12, id: 300, name: 'c11' },
  { parent_id: 12, id: 301, name: 'c11' },
]
console.log('🚀 ~ file: test.js:23 ~ arr:', arr)

// 使用js 写一个函数 将arr数组转成树形数组

const ARR_TO_TREE = 10
