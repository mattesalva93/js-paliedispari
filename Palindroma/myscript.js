//Chiedere all'utente la parola 
let inputUtente = prompt("Inserisci una parola!");

//creo una funzione che confronta la prima lettera e l'ultima di una parola se sono uguali
function controlloPalindromo(controlloParola){
    let contaparola = 0;
    let contaparolaReverse = controlloParola.length -1;
    for (i=0; i < controlloParola.length; i++){
        if (controlloParola[contaparola] == controlloParola[contaparolaReverse]){
            console.log(controlloParola[contaparola] == controlloParola[contaparolaReverse]);
            contaparola++;
            contaparolaReverse--;
        }else{
            return false;
        }
    }
    return true;
}
//verifico se per l'input dell'utente la parola è palindroma
if (controlloPalindromo(inputUtente)){
    console.log("E palindromo!");
}else{
    console.log("Non è palindromo!");
}
