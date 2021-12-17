//definisco una funzione che genera un numero casuale tra 1 e 5, 
//somma 2 numeri e ne stabilisce il pari e dispari;

function even_odd (num1, num2){
    num2 = Math.floor(Math.random()*5 +1);
    console.log(num2);
    let sum = 0;
    sum = (num1 + num2);
    if (sum%2 == 0){
        return true;
    }else{
        return false;
    }
}
//faccio scegliere all'utente tra pari e dispari e ne ricavo l'informazione con un evento sul click di "scelto"
let scelto = document.getElementById("choiceBtn");

scelto.addEventListener("click", function(){
    let pariOdispari = document.getElementById("evenOrodd");
    let decisione = pariOdispari.value;
    console.log(decisione);

    //faccio comparire un nuovo select per il numero che l'utente sceglie
    let scegliNumero = '';
    
    scegliNumero += `
        <select class="mt-3" id="numberOptions">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button id="numberchoiceBtn">Scelto</button>
        `;
    
    const sceltanumero = document.getElementById("choicenumber");
    sceltanumero.innerHTML = scegliNumero;

    //ricavo il valore scelto dall'utente dal select al click di scelto
    let numeroScelto = document.getElementById("numberchoiceBtn");
    
    numeroScelto.addEventListener("click", function(){
        
        let numeroInserito = document.getElementById("numberOptions");
        let decisione2 = parseInt(numeroInserito.value);
        console.log(decisione2);

        //vado a creare un nuovo elemento h1 che farà comparire il numero scelto dal pc
        let numeroPC = document.createElement("h1");

        numeroPC.setAttribute("class", "col-12 text-center")

        document.body.appendChild(numeroPC);

        //vado a creare un nuovo elemento h1 che farà comparire l'esito
        let esitofinale = document.createElement("h1");

        esitofinale.setAttribute("class", "col-12 text-center")

        document.body.appendChild(esitofinale);

        //applico la mia function alle due possibili scelte effettuate dall'utente
        if  (decisione = "pari"){
            if (even_odd(decisione2)){
                console.log("Pari!");
                esitofinale.innerHTML += "TU! HAI VINTO";
            }else{
                console.log("Dispari!");
                esitofinale.innerHTML += "TU! HAI PERSO!";
            }
        }else{
            if (even_odd(decisione2)){
                console.log("Pari!");
                esitofinale.innerHTML += "TU! HAI PERSO!";
            }else{
                console.log("Dispari!");
                esitofinale.innerHTML += "TU! HAI VINTO";
            }
        }
    });
}); 
