let wrd = prompt('Enter word');
const asd = []

for ( let x = 0; x < wrd.length; x++){
    for ( let y = x + 1; y <= wrd.length; y++){
        asd.push(wrd.slice(x,y))
    }
};
console.log(asd);
   