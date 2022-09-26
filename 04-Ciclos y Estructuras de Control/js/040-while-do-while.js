const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;
/*
while( i < carros.length ){
    console.log(carros[i])
    i++;
};
*/

console.warn('While')
while( carros[i]){
    if (i === 1){    
        i++;
        //break;
        continue;
    }
    console.log(carros[i])
    i++;
};

let j = 0;
console.warn('Do While')
do{
    if (j === 1){    
        j++;
        //break;
        continue;
    }

    console.log( carros[j] )
    j++;
}while( carros[j] );