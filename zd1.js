//1 удалить из массива дубликаты
const arr = [1,2,3,5,1,6,2,5,6,7]
const unicFunc = (x) =>{
 let unic = new Set(arr)
 x.length = 0
 unic.forEach(value => x.push(value))
 console.log(x)
}
unicFunc(arr)

//2 объединить объекты
const obj1 = {
  id:1,
  name: "userName"
}
const obj2 = {
  id: 1,
  password: "qwerty"
}
const obj3 = {...obj1,...obj2}
console.log(obj3)

//3  сократить функцию в одну строку
const add = (x,y) =>{return x + y}
console.log(add(1,2))

//4 функция с задержкой
const sleep = ms =>{
  return new Promise((resolve,reject) =>{
   setTimeout(() => {
     resolve("Скидыщ");
   },ms);
})
}
sleep(5000).then(() => {
  console.log("Выполнилось чере 5 секунд!))))");
});