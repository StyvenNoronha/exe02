let anoIdade = document.getElementById("ano");
let sexom = document.getElementById("sexom");
let sexof = document.getElementById("sexof");
let resultado = document.getElementById("resultado");
let teste = document.getElementById("teste");
let imagem = document.getElementById("imagem");
const agora = new Date();
const year = agora.getFullYear();

resultado.addEventListener("click", (e) => {
  if (anoIdade.value && (sexof.checked || sexom.checked)) {
    let idade = year - Number.parseInt(anoIdade.value);
    console.log(idade);
    teste.innerText = `Voce tem ${idade} anos`;
    e.preventDefault();
    imagem.classList.add("img");
    if (sexof.checked) {
      if (idade >= 1 && idade <= 12) {
        imagem.src = "img/criancaF.jpg";
      } else if (idade >= 13 && idade <= 18) {
        imagem.src = "img/adolescenteF.jpg";
      } else if (idade >= 19 && idade <= 59) {
        imagem.src = "img/adultaF.jpg";
      } else {
        imagem.src = "img/idosaF.jpg";
      }
    }
    if (sexom.checked) {
      if (idade >= 1 && idade <= 12) {
        imagem.src = "img/criancaM.jpg";
      } else if (idade >= 13 && idade <= 18) {
        imagem.src = "img/adolescenteM.jpg";
      } else if (idade >= 19 && idade <= 59) {
        imagem.src = "img/adultaM.jpg";
      } else {
        imagem.src = "img/idosoM.jpg";
      }
    }
  } else {
    alert("Digite sua idade de nascimento ou selecione masculino ou feminino");
  }
});
