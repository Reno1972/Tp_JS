do{
    var question=parseInt(prompt("Quel calcul souhaitez-vous faire ?\n - 1 - Addition\n - 2 - Soustraction\n - 3 - Multiplication\n - 4 - Division"));
} while(question<1 || question>4);

let a=prompt("Entrez la première valeur :");
a=+a;

let b=prompt("Entrez la deuxième valeur :");
b=+b

function addition(){
    return a+b;
}
function soustraction(){
    return a-b;
}
function multibication(){
    return a*b;
}
function division(){
    return a/b;
}

switch(question){
    case 1:
        alert("Le resultat de l'addition de "+a+"+"+b+" est : "+addition(a,b));
        break;
    case 2:
        alert("Le résultat de la soustraction"+a+"-"+b+" est : "+soustraction(a,b));
        break;
    case 3:
        alert("Le résultat de la multibication"+a+"x"+b+" est : "+multibication(a,b));
        break;
    case 4:
        alert("Le résultat de la division "+a+"/"+b+" est : "+division(a,b));
        break;
default:
    alert("Voulez-vous recommencer ?")

}
