//Loops

//For Loop -> If you know many times 
// for(let i = 1; i <=10; i = i + 1){
//     console.log('piyush' + i)
// }



//while loop

// let ip = 0
// let house = 50
// while(ip != house){
//     ip = ip + 1;
//     console.log('Step Taken' + ip)
// }

//Do While
// do {
// ip = ip + 1;
// console.log('Step Taken' + ip)
// }while(ip < house)


let number = 40;
let guess = 0;

do {
    guess = parseInt(prompt("Guess a number"))
    if(guess == number){
        
        alert('Winner')
        break;
    }
}while(guess != 0)

