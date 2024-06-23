function buscarEndereco() {
  var cep = document.getElementById("cep").value.replace(/\D/g, '');
  var resultado = document.getElementById("resultado");

  if (cep != "") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var dados = JSON.parse(xhr.responseText);
        if (dados.erro) {
          resultado.innerHTML = "<p>CEP não encontrado.</p>";
        } else {
          resultado.innerHTML = "<p>Endereço: " + dados.logradouro + "</p>" +
                                 "<p>Bairro: " + dados.bairro + "</p>" +
                                 "<p>Cidade: " + dados.localidade + " - " + dados.uf + "</p>";
        }
      }
    };
    xhr.send();
  } else {
    resultado.innerHTML = "<p>Digite um CEP válido.</p>";
  }
}

/* esse codigo mandei no grupo ajuda
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
const previsaoDiv = document.getElementById('previsao');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Simplificando: Exibe apenas as próximas 24 horas
    const temperaturas = data.hourly.temperature_2m.slice(0, 24);

    let previsaoHTML = '<p>Próximas 24 horas:</p>';
    for (let i = 0; i < temperaturas.length; i++) {
      const hora = new Date(data.hourly.time[i]).getHours();
      const temperatura = temperaturas[i];
      previsaoHTML += `<p>${hora}h: ${temperatura}°C</p>`;
    }
    previsaoDiv.innerHTML = previsaoHTML;
  })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
    previsaoDiv.innerHTML = '<p>Erro ao carregar previsão do tempo.</p>';
  });
/*

async function obterPrevisao() {
  const resultadoInput = document.getElementById('resultado');
  resultadoInput.value = 'Carregando...'; // Define o valor enquanto carrega

  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-10&longitude=-55&hourly=temperature_2m&timezone=America%2FSao_Paulo');
    const data = await response.json();

    const proximaHoraTemperatura = data.hourly.temperature_2m[0]; // Temperatura da próxima hora
    resultadoInput.value = `Temperatura próxima hora: ${proximaHoraTemperatura}°C`;
  } catch (error) {
    console.error('Erro ao obter previsão:', error);
    resultadoInput.value = 'Erro ao carregar previsão';
  }
}



/*
function buscarEndereco() {
  const cep = document.getElementById("cep").value.replace(/\D/g, ''); // Remove caracteres não numéricos
  const cidadeElement = document.getElementById("cidade");
  const bairroElement = document.getElementById("bairro");

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => Response.json())
    .then(data => {
      console.log(data); // Verifica se os dados foram retornados corretamente

      if (data.erro) {
        cidadeElement.innerHTML = "CEP inválido";
        bairroElement.innerHTML = ""; // Limpa o bairro se o CEP for inválido
      } else {
        cidadeElement.innerHTML = `Cidade: ${data.localidade}`; 
        bairroElement.innerHTML = `Bairro: ${data.bairro}`; 
      }
    })
    .catch(error => {
      console.error("Erro ao buscar CEP:", error);
      cidadeElement.innerHTML = "Erro ao buscar CEP";
      bairroElement.innerHTML = "";
    });
}



/*
function buscarEndereco() {
  const cep = document.getElementById("cep").value.replace(/\D/g, ''); // Remove caracteres não numéricos
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => Response.json())
    .then(data => {
      cidade.innerHTML = `Cidade: ${data.localidade}`;
      bairro.innerHTML = `Bairro: ${data.bairro}`;
    });
}

/*
let cidade = document.querySelectorAll("#cidade")
let Bairro = document.querySelectorAll("#Bairro")

fetch ("https://viacep.com.br/ws/01001000/json/" )
.then(Response => Response.json())
.then(data => {
  console.log(data);
  cidade.innerHTML +=data.cidade
  Bairro.innerHTML += data.Bairro
})

// novo acima ..............
/*
function buscarEndereco() {
  const inputs = document.querySelectorAll(".cep"); 
  console.log(inputs[0].value); // Acessa o primeiro elemento da NodeList
}
// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado



function colocarNaTela(dados){
    console.log(dados)
    document.querySelectorAll(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelectorAll(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelectorAll(".descricao").innerHTML = dados.weather[0].description
   
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

//quando clicar no botao vai chamar a funçao busca endereço e´nome do botao
function buscarEndereco(){
  //
   let cidade = document.querySelector(".cep").value

   buscarEndereco(cidade)
}



// url para consumir api
//const key = "https://api.open-meteo.com/v1/forecast?latitude=-10&longitude=-55&hourly=temperature_2m&timezone=America%2FSao_Paulo "
          
//funçao cli..e´variavel
//function CliqueiNoBotao(){
   // cep = document.querySelectorAll('#cep').values;
    //url = "https://viacep.com.br/ws/+cep+/json/";
    //const input = document.querySelector(".cep").valueconsole.log(input)
//}
