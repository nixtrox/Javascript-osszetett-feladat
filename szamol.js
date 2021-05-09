let pontszam = 0;
let sum1 = 0;
let sum2 = 0;


function kvaffCalc(){
    let kvaff = document.getElementById("kvaff").value;

    if(kvaff < 0){
        alert("Az érték nem lehet negatív");
        document.getElementById("kvaff").value = 0;
    }
    if(kvaff > 0){
        sum1 = Number(pontszam) + parseInt(Number(kvaff)) * 10;
        document.getElementById("points").innerHTML = Number(sum1) + Number(sum2);
    }

    console.log(sum2 + sum1);
}

function cikeszCalc(){
    let cikesz = document.getElementById("aranycikesz").value;

    if(cikesz > 1){
        alert("Az aranycikeszt csak egyszer lehet elkapni");
        document.getElementById("aranycikesz").value = 1;
    }

    if(cikesz < 0){
        alert("Az érték nem lehet negatív");
        document.getElementById("aranycikesz").value = 0;
    }

    if(cikesz == 1){
        sum2 = Number(pontszam) + 150;
        document.getElementById("points").innerHTML = Number(sum1) + Number(sum2);
    }

    console.log(sum2 + sum1);
}
