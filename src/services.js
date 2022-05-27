export function semaforo(cor) {
    if (cor == "vermelho") {
        return "aguarde"
    }
    else if(cor == "verde") {
        return "Pode passar"
    }
    else {
        return "invalido"
    }
}

export function diaSemana(dia) {
    if (dia === 0){
        return "domingo"
    }
    else if(dia === 1) {
        return "segunda-feira"
    }

    else if(dia === 2) {
        return "terça-feira"
    }

    else if(dia === 3) {
        return "quarta-feira"
    }

    else if(dia === 4) {
        return "quinta-feira"
    }

    else if(dia === 5) {
        return "sexta-feira"
    }

    else if(dia === 6) {
        return "sabado"
    }

    else{
        return "dia invalido"
    }

}
export function fatorial(numero) {
    let a = 1;
    for(let cont = numero; cont > 1; cont --){
        a *= cont;
    }
    return a
}

export function sequenciaPar(limite) {
    let a = []
    let num = 0
    for(let i = 0; i <= limite ; i++) {
        a[i] = num * 2
        num++
    } 
    return a
}


