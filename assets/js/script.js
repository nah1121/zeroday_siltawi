const arr = [0,1,2,3,4];
const len = arr.length
const z = []

arr.push(5,6)
n = 0
for(let i=0; i<len; i++){
    n += 1
    z.unshift(arr[n])
}


console.log(z)