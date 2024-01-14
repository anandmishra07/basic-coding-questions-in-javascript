const num = prompt("enter the number :");

console.log(`the factors of ${num} is : `);

for(let i = 1; i<=num; i++){
    if (num %i == 0){
        console.log(i); 
    }
}