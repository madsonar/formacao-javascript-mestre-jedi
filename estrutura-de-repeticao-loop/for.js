//escrever de 0 - 10
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/
for(var contador = 0; contador < 11; contador++){//variaveis de bloco do for
    console.log(contador);
}

//com array
var arrayNomes = ['pedro', 'maria', 'paulo', 'roberto'];

for(i = 0; i < arrayNomes.length; i++){
    console.log(arrayNomes[i]);
}

//---
var i = 0;
for(;i < 3;i++){
    console.log(i);
}

var i = 0;
for(;;i++){
    if(i == 2 || i == 7)
    continue;
    console.log(i);

    if(i == 10) break;
}


