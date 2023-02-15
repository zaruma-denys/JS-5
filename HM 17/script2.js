// function isSimpleNumber(number) {
//     console.log(`${number}`)
// }

// isSimpleNumber('5')

// function isSimpleNumber(number){
//     let i = 1;
//     if(number/i === number) {
//     console.log(`${number} is true`)
//     }

//     if(number/number === i){
//     console.log(`${number} is true`)
//     }
//     else{
//         console.log('false')
//     }
// }

function isPrime(num) {
  if (num < 1 || num%1!==0) {
    console.log('не натуральне')
  }
  for (let i=2; i<num; i++) {
    if (num%i===0) {
      console.log('не натуральне')
    }
  }
  console.log('число натуральне')
}

function isPrime(num) {
  if (num < 1 || num%1!==0) {
    console.log('не натуральне')
    return
  }
  for (let i=2; i<num; i++) {
    if (num%i===0) {
      console.log('не натуральне')
      return
    }
  }
  console.log('число натуральне')
}
