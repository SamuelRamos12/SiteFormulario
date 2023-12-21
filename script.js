function Resultado() {
    const respostas = document.forms["Formulario"].elements;
    let pontuacao = 0;

    for (const resposta of respostas) {
        if (resposta.type === "radio" && resposta.checked) {
            pontuacao += parseInt(resposta.value);
        }
    }

    let resultado = "Seu resultado: ";
    if (pontuacao >=0 && pontuacao <6) {
        resultado = "Você pode gostar de uma carreira na área de Mecânica.";
    }

    if (pontuacao === 6) {
        resultado = "Você pode gostar de uma carreira na área de Saúde e Segurança.";
    } 

    if (pontuacao >6 && pontuacao <12) {
        resultado = "Você pode gostar de uma carreira na área de Mecânica ou na área de Saúde e Segurança.";
    } 

    if (pontuacao === 12) {
        resultado = "Você pode gostar de uma carreira na área de Informática.";
    } 

    if (pontuacao >12 && pontuacao <18) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática.";
    } 

    if (pontuacao === 18) {
        resultado = "Você pode gostar de uma carreira na área de Meio Ambiente.";
    } 

    if (pontuacao >18 && pontuacao <24) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente.";
    } 

    if (pontuacao === 24) {
        resultado = "Você pode gostar de uma carreira na área Administrativa.";
    }
    
    if (pontuacao >24 && pontuacao <30) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente;\nAdministrativa.";
    } 

    if (pontuacao === 30) {
        resultado = "Você pode gostar de uma carreira na área de Automação.";
    } 

    if (pontuacao >30 && pontuacao <36) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente; \nAutomação.";
    } 

    if (pontuacao === 36) {
        resultado = "Você pode gostar de uma carreira na área de elétrica.";
    } 

    
    const novaGuia = window.open();
    novaGuia.document.write('<html><head><title>Resultado</title>');
    novaGuia.document.write('<style>');
    novaGuia.document.write(`

        body {
            margin: 10px;
            font-family: Arial, sans-serif;
            text-align: center;
            background: #ffffff7e;   
            background-image: url("Senai2.png")     
        }
        h1 {
            color: #000000;
            

        }
        h3 {
            color: #000000;
        }

                                      
    `);
    novaGuia.document.write('</style>');
    novaGuia.document.write('</head><body>');
    novaGuia.document.write('<h1>Resultado do Teste Vocacional</h1>');
    novaGuia.document.write(`<p><h3>${resultado}</h3></p>`);
    novaGuia.document.write('</body></html>');
    novaGuia.document.close();
}

