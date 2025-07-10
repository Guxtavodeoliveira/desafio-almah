# Consulta de Endereços

Este é um projeto completo com **frontend em HTML, CSS e JavaScript** e uma **API backend em .NET 6**, que realiza consultas de endereço utilizando a API pública ViaCEP.

---

## 🚀 Funcionalidades

- Consulta por **CEP**
- Consulta por **Estado, Cidade e Logradouro**
- Interface limpa e responsiva
- Backend intermediador em C# (.NET 6)

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- .NET 6 (ASP.NET Core)
- API pública [ViaCEP](https://viacep.com.br)

---

## ▶️ Como executar o projeto

💻 Você pode acessar a versão funcional do projeto diretamente pelo link:  
[https://guxtavodeoliveira.github.io/desafio-almah/](https://guxtavodeoliveira.github.io/desafio-almah/)

---

### ⚙️ Executando o projeto localmente com a API

Para testar o projeto completo no seu computador, siga os passos:

1. Abra o terminal e vá até a pasta do backend:

```bash
cd enderecoapi
dotnet run

2. Verifique qual URL a API está usando ex.(http://localhost:5000).

3. No arquivo script.js substitua a URL da API remota pela sua local:

Antes
fetch(`https://desafio-almah-production.up.railway.app/api/enderecos/cep/${cep}`)

Depois
fetch(`http://localhost:5000/api/enderecos/cep/${cep}`)

Obs. Faça isso para o fetch CEP e o fetch CIDADE, ESTADO, LOGRADOURO.

---
```

## 📝 Observações

Este projeto foi originalmente criado utilizando o .NET 9 Preview, mas foi necessário substituir a versão para .NET 6.0 para garantir compatibilidade e funcionamento estável na plataforma Railway.

Os commits foram organizados a partir da etapa final do projeto por motivos técnicos, mas busquei seguir boas práticas de versionamento e separação lógica mesmo nos últimos ajustes.

---

## 🙏 Agradecimentos

Agradeço à equipe Almah por proporcionar este desafio, que me ajudou a crescer como profissional e aprimorar minhas habilidades.
