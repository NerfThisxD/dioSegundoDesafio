//              0       1          2      3         4          5             6
const elo = ["Ferro","Bronze", "Prata", "Ouro", "Diamenta", "Lendario", "Imortal"]

let vitoria = totalDePartidas(250,1050)

function totalDePartidas(derrotas,partidas){
    let resultado = partidas - derrotas
    return resultado
}


switch(true){
    case vitoria <= 100:
        console.log("você tem " + vitoria + " e está no elo " + elo[0])
        break

    case vitoria >= 101 && vitoria <=200:
        console.log("você tem " + vitoria + " e está no elo " + elo[1])
        break
    
    case vitoria >= 201 && vitoria <= 500:
        console.log("você tem " + vitoria + " e está no elo " + elo[2])
        break
    
    case vitoria >= 501 && vitoria <= 800:
        console.log("você tem " + vitoria + " e está no elo " + elo[3])
        break
    
    case vitoria >= 801 && vitoria <=900:
        console.log("você tem " + vitoria + " e está no elo " + elo[4])
        break
    
    case vitoria >= 901 && vitoria <= 1000:
        console.log("você tem " + vitoria + " e está no elo " + elo[5])
        break

    case vitoria >= 1001:
        console.log("você tem " + vitoria + " e está no elo " + elo[6])
        break
}

//Optei em usar Switch case para estudos de como seria. Tive mais dificuldade nesse do que no anterios