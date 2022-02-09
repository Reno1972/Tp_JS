let question=prompt("Quel calcul souhaitez-vous faire ?\n - 1 - Addition\n - 2 - Soustraction\n - 3 - Multiplication\n - 4 - Division");
question=+question;
whileif    return question;
}else throw new Error("Tu ne peut pas faire cette opération");
let a=prompt("Entrez la première valeur :");
a=+a;
let b=prompt("Entrez la deuxième valeur :");
b=+b
function addition(){
    calcul=a+b;
    return calcul;
}
function soustraction(){
    calcul=a-b;
    return calcul;
}
function multibication(){
    calcul=a*b;
    return calcul;
}
function division(){
    calcul=a/b;
    return calcul;
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