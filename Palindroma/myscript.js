//Chiedere all'utente la parola 
let inputUtente = prompt("Inserisci una parola!");

//creo una funzione che confronta la prima lettera e l'ultima di una parola se sono uguali
function controlloPalindromo(parola){
    let contaparola = 0;
    let contaparolaReverse = parola.length -1;
    for (i=0; i < parola.length; i++){
        if (parola[contaparola] == parola[contaparolaReverse]){
            console.log(parola[contaparola] == parola[contaparolaReverse]);
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
