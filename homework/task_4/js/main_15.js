let country = ['Kyrgyzstan', 'Uzbekistan', 'Kazakhstan', 'Russia', 'England', 'USA']

country.sort(function(a,b) {
    return b.length - a.length
    
})

console.log(country);
console.log(country[0], country[country.length -1]);

