console.log("Olá, bem-vindo ao seu classificador de herói. Consulte abaixo o seu ranking de acordo com o XP adquirido");

let heroi = [
    ["lulu"],
    ["zyra"],
    ["nami"],
    ["janna"],
    ["leona"],
    ["morgana"],
    ["lux"],
    ["syndra"]
];

let xpHeroi = [
    [2500],
    [8100],
    [999],
    [1400],
    [6000],
    [7100],
    [10000],
    [10300]
];

for (let i = 0; i < heroi.length; i++) {
    console.log(heroi[i][0] + " " + xpHeroi[i][0]);

    if (xpHeroi[i][0] < 1000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Ferro");
    } else if (xpHeroi[i][0] >= 1001 && xpHeroi[i][0] <= 2000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Bronze");
    } else if (xpHeroi[i][0] >= 2001 && xpHeroi[i][0] <= 5000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Prata");
    } else if (xpHeroi[i][0] >= 5001 && xpHeroi[i][0] <= 7000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Ouro");
    } else if (xpHeroi[i][0] >= 7001 && xpHeroi[i][0] <= 8000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Platina");
    } else if (xpHeroi[i][0] >= 8001 && xpHeroi[i][0] <= 9000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Ascendente");
    } else if (xpHeroi[i][0] >= 9001 && xpHeroi[i][0] <= 10000) {
        console.log("A heroína " + heroi[i][0] + " está no ranking Imortal");
    } else {
        console.log("A heroína " + heroi[i][0] + " está no ranking Radiante");
    }
}
