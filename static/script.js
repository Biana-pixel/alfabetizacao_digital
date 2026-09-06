function corrigirQuiz() {

    const respostasCorretas = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "b"
    };

    let pontos = 0;

    for (let pergunta in respostasCorretas) {

        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (resposta && resposta.value === respostasCorretas[pergunta]) {
            pontos++;
        }
    }

    const resultado = document.getElementById("resultado");

    let mensagem = "";

    if (pontos === 5) {
        mensagem = "Excelente! Você demonstrou um ótimo conhecimento digital. 🌟";
    } 
    else if (pontos >= 3) {
        mensagem = "Muito bem! Você já possui bons conhecimentos digitais. 👍";
    } 
    else {
        mensagem = "Continue praticando! Aprender tecnologia é um processo. 📚";
    }

    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Você acertou <strong>${pontos} de 5</strong> questões.</p>
        <p>${mensagem}</p>
    `;

    resultado.style.display = "block";
}