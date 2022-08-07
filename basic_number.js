/**
 1-100 er basic number
 */
 const numbers = [];
 for(let i = 1; i<=100;i++){
     numbers.push(i)
    //  console.log(numbers);
 }
 for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element%2 !== 0 && element%3 !== 0 && element%4 !== 0 && element%5 !== 0 && element%6 !== 0 && element%7 !== 0 && element%8 !== 0 && element%9 !== 0 ){
        console.log('This is Basic Number', element);
    }
}