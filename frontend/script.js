function buscarPorCep() {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (!cep.match(/^\d{8}$/)) {
        alert("Digite um CEP válido com 8 números (sem traço).");
        return;
    }

    document.getElementById("resultado").innerText = "";

    fetch('https://desafio-almah-production.up.railway.app/api/enderecos/cep/01001000')
        .then(response => {
            if (!response.ok) throw new Error("Erro na requisição");
            return response.json();
        })
        .then(function(dados) {
            document.getElementById("resultado").innerHTML = `
        <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Cidade:</strong> ${dados.localidade}</p>
        <p><strong>UF:</strong> ${dados.uf}</p>
    `;
        })
        .catch(error => {
            console.error(error);
            alert("Não foi possível buscar o CEP.");
        });
}

function buscarPorEstadoCidadeRua() {
    const estado = document.getElementById("estado").value.trim().toUpperCase();
    const cidade = document.getElementById("cidade").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();

    if (!estado || !cidade || !logradouro) {
        alert(" Erro ao buscar o endereço. Verifique os dados informados.");
        return;
    }
    document.getElementById("resultado").innerText = "";

    fetch('https://desafio-almah-production.up.railway.app/api/enderecos/cep/01001000')
        .then(response => {
            if (!response.ok) throw new Error("Erro ao buscar o endereço. Verifique os dados informados.");
            return response.json();
        })
        .then(dados => {
            if (Array.isArray(dados) && dados.length === 0) {
                document.getElementById("resultado").innerText = " Erro ao buscar o endereço. Verifique os dados informados.";
            } else {
                // Pega só o primeiro item do array
                const primeiro = dados[0];
                document.getElementById("resultado").innerHTML = `<p><strong>CEP:</strong> ${primeiro.cep}</p>`;
            }
        })



        .catch(error => {
            console.error(error);
            document.getElementById("resultado").innerText = "Erro ao buscar o endereço. Verifique os dados informados.";
        });
}
