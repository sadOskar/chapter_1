const numb = []

for (let i = 1; i <= 100; i++){
    if (i % 7 === 0 || i % 5 === 0 || i % 3 === 0){
        numb.push(i)
    }
}



// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0){
//         numb.push(i)
//     }
//     else if(i % 5 === 0 ){
//         numb.push(i)
//     }
//     else if(i % 7 === 0 ){
//         numb.push(i)
//     }
// }

    console.log(numb)