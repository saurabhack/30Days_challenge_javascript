let arr=[1,2,3,4,5,6]
let newArray=[...arr,7,8,9]
console.log(newArray)

function add(...num){
    let sum=0
    num.forEach(val=>{
         sum+=val
    })
    return sum
}
console.log(add(1,2,3,4,5,6,7))
