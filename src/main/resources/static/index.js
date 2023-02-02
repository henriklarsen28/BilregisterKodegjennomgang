window.onload = () =>{
    visBiler()
}
let teller = 0;

let biler = [
    {
        id: teller++,
        merke: "Audi",
        modell: "A6",
        kjennetegn: "KJ234564"
    },
    {
        id:teller++,
        merke: "BMW",
        modell: "330i",
        kjennetegn: "KJ464564"
    }
]

function lagreBil(){
    let bil = {
        id:teller++,
        merke: document.getElementById("merke").value,
        modell: document.getElementById("modell").value,
        kjennetegn: document.getElementById("kjennetegn").value
    }
    let errorCount = 0;

    if(bil.merke == ""){
        document.getElementById("merkeError").innerHTML = "Skriv inn et merke"
        errorCount++
    }
    else{
        document.getElementById("merkeError").innerHTML = ""
    }
    if(bil.modell == ""){
        document.getElementById("modellError").innerHTML = "Skriv inn en modell"
        errorCount++
    }
    else{
        document.getElementById("modellError").innerHTML = ""
    }
    if (bil.kjennetegn == "" || bil.kjennetegn.length !== 9){
        document.getElementById("kjennetegnError").innerHTML = "Skriv inn et kjennetegn"
        errorCount++
    }
    else{
        document.getElementById("kjennetegnError").innerHTML = ""
    }

    if(errorCount === 0){
        biler.push(bil)
        tomInput()
        visBiler()
    }




}

function tomInput(){
    document.getElementById("merke").value = ""
    document.getElementById("modell").value = ""
    document.getElementById("kjennetegn").value = ""
}

function visBiler(){
    let ut = "<table><tr><th>Merke</th><th>Modell</th><th>Kjennetegn</th></tr>"

    for (let bil of biler){
        ut += "<tr><td>"+ bil.merke +"</td><td>" + bil.modell + "</td><td>" + bil.kjennetegn + "</td><td><button onclick='slettBil(" + bil.id + ")'>Slett</button></td></tr>"
    }

    ut += "</table>"

    document.getElementById("biler").innerHTML = ut
}

function slettBil(id){
    biler = biler.filter(bil => bil.id !== id)
    visBiler()
}