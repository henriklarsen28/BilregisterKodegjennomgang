window.onload = () => {
    visBiler();
}
let teller = 0;
let biler = [
    {
        id: teller++,
        merke:"Audi",
        modell:"A6",
        kjennetegn:"KH 235454"
    },
    {
        id: teller++,
        merke:"BMW",
        modell:"330i",
        kjennetegn:"KH 235453"
    }
];

function lagreBil(){
    let bil = {
        id: teller++,
        merke: document.getElementById("merke").value,
        modell: document.getElementById("modell").value,
        kjennetegn: document.getElementById("kjennetegn").value
    }
    biler.push(bil);
    console.log(biler);
    visBiler();
}
function visBiler(){
    let ut = "<table><tr><th>Merke</th><th>Modell</th><th>Kjennetegn</th></tr>";
    for(let bil of biler){
        ut += "<tr><td>" + bil.merke + "</td><td>" + bil.modell + "</td><td>" + bil.kjennetegn + "</td><td><button onclick='slettBil("+ bil.id +")'>Slett</button></td></tr>";
    }
    ut += "</table>";
    document.getElementById("biler").innerHTML = ut;
}

function slettBil(id){
    console.log(biler[id])
    biler = biler.filter(bil => bil.id !== id);
    visBiler();
}