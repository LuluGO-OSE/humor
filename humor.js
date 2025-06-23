function Humorescolhido() {
    const seletor = document.getElementById("seletor");
    const mensagem = document.getElementById("mensagem");
    const valorSelecionado = seletor.value;

    let texto = "";

    switch (valorSelecionado) {
        case "feliz":
            texto = "Continue sorrindo, sua energia contagia!";
            break;
        case "triste":
            texto = "Tudo passa. Respire fundo e se cuide.";
            break;
        case "estressado":
            texto = "Tente fazer uma pausa. Um pouco de descanso pode ajudar.";
            break;
        case "ansioso":
            texto = "Uma coisa de cada vez! Você vai conseguir.";
            break;
        case "calmo":
            texto = "Que bom! Aproveite o momento de paz.";
            break;
        case "animado":
            texto = "Use essa energia positiva para realizar algo incrivel hoje!";
            break;
        case "irritado":
            texto = "Irritações acontecem. Dê um tempo, respire fundo!";
            break;
        case "1":
        default:
            texto = "Por favor, selecione um humor válido.";
            break;
    }

    mensagem.textContent = texto;
}