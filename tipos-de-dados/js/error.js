console.log("linha 1");
//throw new Error("Ocorreu um erro na aplicação!");
console.log("linha 3");

try {
    
    console.log(soma(10,new Array(10)));

} catch (error) {
    //console.log(error);
    console.log("Name: " + error.name);
    console.log("\nMessage: " + error.message);
    console.log("\nStack: "+ error.stack);
}finally{
    console.log("\n\nSempre será executado!!!")
}

function soma(a, b){
    //return a + b;
    //return a / b;
    //return a[3];
    //return a.nome;
    //return a.exec(20);
    return a.exec();
}