let arr=[1,2,3,4,5]
console.log(arr)
console.log(arr[0])
console.log(arr[arr.length-1])
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)

function add(number){
    return number+1
}
let num=[1,2,3,4]
let newArray=num.map(add)
console.log(newArray)
let event=newArray.filter(even)
console.log(event)
function even(num){
    return num%2==0;
}
function add(total,number){
    return total+number
}
console.log(newArray.reduce(add))
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
num.forEach(function(element){
    console.log(element)
})
