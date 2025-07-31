import {adicionar_item} from "./js/adicionar-item.js"

// joga o botão do formulário em sua variável
const botao_adicionar_item = document.getElementById("botao-adicionar-item")

// é adicionado um "escutador de eventos" na variável que recebeu o botão do formulário. O evento é "click" e a ação tomada é chamar a função adicionar_item
botao_adicionar_item.addEventListener("click",adicionar_item)

const campo = document.getElementById("input-item").value

console.log(campo)
