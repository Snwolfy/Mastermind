const couleurs = ["red","blue","green","yellow","pink"]

function ordiResult() {
    const sequence = [];
    for (let i = 0; i < 4; i++) {
        const position = Math.floor(Math.random() * couleurs.length);
        let couleur = couleurs[position];
        sequence.push(couleur);
    }
    return sequence;
}
const ordiSequence = ordiResult();
console.log(ordiSequence);

const rouge = document.querySelector("#couleur1");
rouge.onclick = choix;
rouge.onmouseover = red;
rouge.onmouseout = redOut;

const bleue = document.querySelector("#couleur2");
bleue.onclick = choix;
bleue.onmouseover = blue;
bleue.onmouseout = blueOut;

const vert = document.querySelector("#couleur3");
vert.onclick = choix;
vert.onmouseover = green;
vert.onmouseout = greenOut;

const jaune = document.querySelector("#couleur4");
jaune.onclick = choix;
jaune.onmouseover = yellow;
jaune.onmouseout = yellowOut;

const rose = document.querySelector("#couleur5");
rose.onclick = choix;
rose.onmouseover = pink;
rose.onmouseout = pinkOut;

const envoyer = document.querySelector("#envoyer")
envoyer.onclick = envoie;
envoyer.onmouseover = envoieOver;
envoyer.onmouseout = envoieOut;

function envoieOver () {
    envoyer.style.fontSize = "50px";
}
function envoieOut () {
    envoyer.style.fontSize = "40px";
}
let compteur = 1;

function envoie(){
    let ordiSequence2 = ordiSequence.slice();
    let couleurVrai = 0;
    console.log(ordiSequence);
    j = 0;
    while ( j < reponse.length) {
        if ( reponse[j] == ordiSequence2[j]) {
            couleurVrai++;
            reponse.splice(j,1);
            ordiSequence2.splice(j,1);
        }
        else {
            j++;
        }
        
    }
    console.log("joueur " +  reponse);
    console.log("ordi " + ordiSequence2);
    let couleurFausse = 0;
    k = 0;
    while ( k < reponse.length) {
        const positionCouleur = ordiSequence2.indexOf(reponse[k]);
        if ( positionCouleur > -1) {
            couleurFausse++;
            reponse.splice(k,1);
            ordiSequence2.splice(positionCouleur,1);
        }
        else {
            k++
        }

    }
    if ( compteur < 11 && i == 4) {
        console.log("Réponses joueur : " + reponse);
        const create = document.querySelector("#reponses");
        const result1 =  "style='width: 40px; height: 40px ; border-radius: 50% ; background-color:" + rep1.style.backgroundColor +";'";
        const result2 =  "style='width: 40px; height: 40px ; border-radius: 50% ; background-color:" + rep2.style.backgroundColor +";'";
        const result3 =  "style='width: 40px; height: 40px ; border-radius: 50% ; background-color:" + rep3.style.backgroundColor +";'";
        const result4 =  "style='width: 40px; height: 40px ; border-radius: 50% ; background-color:" + rep4.style.backgroundColor +";'";
        create.innerHTML +=  "<div style='display:flex; justify-content: space-evenly'> <div " + result1+ ">" + "</div>" + "<div " + result2+ ">" + "</div>" + 
        "<div " + result3+ ">" + "</div>" + 
        "<div " + result4+ ">" + "</div> </div>" ;
        const  help = document.querySelector("#tips");
        const helpTips =  "Tour " + compteur  + " : Bien placé : " + couleurVrai + " | Mal placé : " + couleurFausse;
        help.innerHTML +=  "<div style='display:flex; align-items:center; color: #0C2231; font-family: poppins;'>" + helpTips + "</div>";
        supprimer();
        compteur++;
    }
    if ( couleurVrai == 4) {
        alert("Vous avez gagné ! Félicitation !");
    }
}
function traitement() {
    console.log(ordiSequence);
    console.log(reponse);
    let ordiSequence2 = ordiSequence;
    let couleurVrai = 0;
    j = 0;
    while ( j < reponse.length) {
        if ( reponse[j] == ordiSequence[j]) {
            couleurVrai++;
            reponse.splice(j,1);
            ordiSequence2.splice(j,1);
        }
        else {
            j++;
        }
        
    }
    console.log("joueur " +  reponse);
    console.log("ordi " + ordiSequence2);
    let couleurFausse = 0;
    k = 0;
    while ( k < reponse.length) {
        const positionCouleur = ordiSequence.indexOf(reponse[k]);
        if ( positionCouleur > -1) {
            couleurFausse++;
            reponse.splice(k,1);
            ordiSequence2.splice(positionCouleur,1);
        }
        else {
            k++
        }

    }
}

var rep1 = document.querySelector("#choice1");

var rep2 = document.querySelector("#choice2");

var rep3 = document.querySelector("#choice3");

var rep4 = document.querySelector("#choice4");

const supprime = document.querySelector("#delete");
supprime.onclick = supprimer;
supprime.onmouseover = supprimeOver;
supprime.onmouseout = supprimeOut;

const recharger = document.querySelector("#refresh");
recharger.onclick = refresh;
recharger.onmouseover = rechargeOver;
recharger.onmouseout = rechargeOut;

function supprimeOver () {
    supprime.style.fontSize = "50px";
}
function supprimeOut () {
    supprime.style.fontSize = "40px";
}

function rechargeOver () {
    recharger.style.fontSize = "50px";
}
function rechargeOut () {
    recharger.style.fontSize = "40px";
}

function refresh() {
    window.location.reload()
}
function supprimer (){
    i = 0;
    reponse = [];
    rep1.style.backgroundColor = "white";
    rep2.style.backgroundColor = "white";
    rep3.style.backgroundColor = "white";
    rep4.style.backgroundColor = "white";
}

let type;

function red () {
    type = "red";
    rouge.style.width = "50px" ;
    rouge.style.height = "50px";
    rouge.style.borderRadius = "50%";
}
function redOut () {
    rouge.style.width = "40px" ;
    rouge.style.height = "40px";
    rouge.style.borderRadius = "50%";
}
function blue () {
    type = "blue";
    bleue.style.width = "50px" ;
    bleue.style.height = "50px";
    bleue.style.borderRadius = "50%";
}
function blueOut() {
    bleue.style.width = "40px" ;
    bleue.style.height = "40px";
    bleue.style.borderRadius = "50%";
}
function green () {
    type = "green";
    vert.style.width = "50px" ;
    vert.style.height = "50px";
    vert.style.borderRadius = "50%";
}
function greenOut () {
    vert.style.width = "40px" ;
    vert.style.height = "40px";
    vert.style.borderRadius = "50%";
}
function yellow () {
    type = "yellow";
    jaune.style.width = "50px" ;
    jaune.style.height = "50px";
    jaune.style.borderRadius = "50%";
}
function yellowOut() {
    jaune.style.width = "40px" ;
    jaune.style.height = "40px";
    jaune.style.borderRadius = "50%";
}
function pink () {
    type = "pink";
    rose.style.width = "50px" ;
    rose.style.height = "50px";
    rose.style.borderRadius = "50%";
}
function pinkOut() {
    rose.style.width = "40px" ;
    rose.style.height = "40px";
    rose.style.borderRadius = "50%";
}

var reponse = [];
let i = 0;

function choix () {
    if ( i == 0) {
        if (type == "red") {
        rep1.style.backgroundColor = "red"
        reponse.push("red");
        }
        else if (type == "blue") {
            rep1.style.backgroundColor = "blue"
            reponse.push("blue");
        }
        else if (type == "green") {
            rep1.style.backgroundColor = "green"
            reponse.push("green");
          
        }
        else if (type == "yellow") {
            rep1.style.backgroundColor = "yellow"
            reponse.push("yellow");
     
        }
        else if (type == "pink") {
            rep1.style.backgroundColor = "#F46688"
            reponse.push("pink");
      
        }
        i++;
    }
    else if ( i == 1) {
        if (type == "red") {
        rep2.style.backgroundColor = "red"
        reponse.push("red");
      
        }
        else if (type == "blue") {
            rep2.style.backgroundColor = "blue"
            reponse.push("blue");
            
        }
        else if (type == "green") {
            rep2.style.backgroundColor = "green"
            reponse.push("green");
            
        }
        else if (type == "yellow") {
            rep2.style.backgroundColor = "yellow"
            reponse.push("yellow");
            
        }
        else if (type == "pink") {
            rep2.style.backgroundColor = "#F46688"
            reponse.push("pink");
           
        }
        i++;
    }
    else if ( i == 2) {
        if (type == "red") {
        rep3.style.backgroundColor = "red"
        reponse.push("red");
      
        }
        else if (type == "blue") {
            rep3.style.backgroundColor = "blue"
            reponse.push("blue");
            
        }
        else if (type == "green") {
            rep3.style.backgroundColor = "green"
            reponse.push("green");
        
        }
        else if (type == "yellow") {
            rep3.style.backgroundColor = "yellow"
            reponse.push("yellow");
         
        }
        else if (type == "pink") {
            rep3.style.backgroundColor = "#F46688"
            reponse.push("pink");
          
        }
        i++;
    }
    else if ( i == 3) {
        if (type == "red") { 
            rep4.style.backgroundColor = "red"
            reponse.push("red");
            
        }
        else if (type == "blue") {
            rep4.style.backgroundColor = "blue"
            reponse.push("blue");
            
        }
        else if (type == "green") {
            rep4.style.backgroundColor = "green"
            reponse.push("green");
           
        }
        else if (type == "yellow") {
            rep4.style.backgroundColor = "yellow"
            reponse.push("yellow");
           
        }
        else if (type == "pink") {
            rep4.style.backgroundColor = "#F46688"
            reponse.push("pink");
        
        }
        i++;
    }
}
