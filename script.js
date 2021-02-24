let nome = window.prompt('Digite o seu nome: ');

function1();

function function1() {
    let agora = new Date();
    let hora = agora.getHours();
    let minu = agora.getMinutes();
    window.alert(`Agora são ${hora} horas e ${minu} minutos.`);
    if (hora >= 6 && hora < 12) {
        window.alert(`Bom Dia, ${nome}! Esse site foi desenvolvido para agrupar todas as auladas de cada disciplina do P2, em um só lugar.`);
    }
    else if (hora > 11 && hora < 18) {
        window.alert(`Boa Tarde, ${nome}! Esse site foi desenvolvido para agrupar todas as auladas de cada disciplina do P2, em um só lugar.`);
    }
    else if (hora >= 18 && hora <= 23) {
        window.alert(`Boa Noite, ${nome}! Esse site foi desenvolvido para agrupar todas as auladas de cada disciplina do P2, em um só lugar.`);
    }
    else {
        window.alert(`Boa Madrugda, ${nome}! Esse site foi desenvolvido para agrupar todas as auladas de cada disciplina do P2, em um só lugar.`);
    }
}
