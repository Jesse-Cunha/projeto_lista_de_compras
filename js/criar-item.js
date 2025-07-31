import { deletar_item } from "./deletar-item.js"

import { editar_item } from "./editar-item.js"

// joga a "ul" lista-itens-comprados em sua variável
const lista_itens_comprados = document.getElementById("lista-itens-comprados")

// joga a "ul" lista-de-compras em sua variável
const lista_de_compras = document.getElementById("lista-de-compras")

// esse contador será usado para nomear novos checkbox
let contador = 0

// função que cria o item, com todas as suas divs relacionadas e funções relacionadas (como deletar, editar e dar check)
export function criar_item(item) {

 // cria um elemento "li" e joga na variável item_da_lista
 const item_da_lista = document.createElement("li")

 // cria um elemento "div" e joga na variável container_item_da_lista
 const container_item_da_lista = document.createElement("div")

 // adiciona a classe "container-item-da-lista" na div criada acima
 container_item_da_lista.classList.add("container-item-da-lista")

 // faz com que a "li" criada acima receba a div criada acima como sua filha
 item_da_lista.appendChild(container_item_da_lista)

 // cria a div que está hierarquicamente dentro da div anterior:
 const container_nome_do_item = document.createElement("div")

 // adiciona a classe "container-nome-do-item" na nova div criada acima
 container_nome_do_item.classList.add("container-nome-do-item")

 // faz com que a div container_item_da_lista receba a div container_nome_do_item como seu filho:
 container_item_da_lista.appendChild(container_nome_do_item)

 // cria a div checkbox-container e a joga em sua variável
 const checkbox_container = document.createElement("div")

 // adiciona a classe correspondente
 checkbox_container.classList.add("checkbox-container")

 // cria o input que será usado como checkbox e o joga na sua variável
 const checkbox_input = document.createElement("input")

 // define o tipo de input como sendo checkbox
 checkbox_input.type = "checkbox"

 //adiciona a classe correspondente
 checkbox_input.classList.add("checkbox-input")

 // adiciona um valor dinâmico para o id do checkbox criado a cada item adicionado
 checkbox_input.id = "checkbox-" + contador++

 // cria o label que será associado ao input checkbox
 const checkbox_label = document.createElement("label")

 // seta o atributo "for" do label como tendo o valor do id do checkbox criado
 checkbox_label.setAttribute("for", checkbox_input.id)


 // aqui ela fez algo um pouco complicadinho de entender. Ao clicar no LABEL das checkbox (notar que o próprio conteúdo do label é o input checkbox), vai acionar a função. OBS: o input checkbox verdadeiro está "invisível" devido ao 'display: none' no CSS
 checkbox_label.addEventListener("click",function (evento) {
     
     // a variável 'checkbox_input' recebe o elemento cuja classe é "checkbox-input". O currentTarget É O LABEL (o "dono" do evento atual)
     const checkbox_input = evento.currentTarget.querySelector(".checkbox-input")

     // a variável 'checkbox_customizado' recebe o elemento cuja classe é "checkbox-input". O currentTarget É O LABEL (o "dono" do evento atual)
     const checkbox_customizado = evento.currentTarget.querySelector(".checkbox-customizado")


     // procura o nome_do_item a partir do id que foi adicionado a ele após a criação do item com a tag "p" e joga
     // na variável titulo_do_item
     const titulo_do_item = evento.currentTarget.closest("li").querySelector("#titulo-do-item")


     // condicional que testa se o input VERDADEIRO está selecionado
     if(checkbox_input.checked) {

         // se sim, adiciona a "segunda classe", 'checked', do elemento checkbox-customizado
         checkbox_customizado.classList.add("checked")

         // faz com que o nome do item fique riscado caso se dê o check
         titulo_do_item.style.textDecoration = "line-through"
     
         // faz com que a "ul" lista_itens_comprados receba o item_da_lista como filho
         lista_itens_comprados.appendChild(item_da_lista)
     } 
     
     else 
     
         // senão, remove a "segunda classe", 'checked', do elemento checkbox-customizado
         { checkbox_customizado.classList.remove("checked")

         // retira o riscado do nome do item quando o check é removido
         titulo_do_item.style.textDecoration = "none"

         // faz com que a "ul" lista_de_compras volte a receber o item_da_lista como filho
         lista_de_compras.appendChild(item_da_lista)
     }


 })

 // cria a div checkbox-customizado e a joga em sua variável
 const checkbox_customizado = document.createElement("div")

 // adiciona a classe correspondente
 checkbox_customizado.classList.add("checkbox-customizado")

 // faz com que o label criado receba os checkbox como filhos
 checkbox_label.appendChild(checkbox_input)
 checkbox_label.appendChild(checkbox_customizado)

 // faz com que a div checkbox-container receba o label como seu filho
 checkbox_container.appendChild(checkbox_label)

 //faz com que a div container-nome-do-item receba a div checkbox-container como sua filha
 container_nome_do_item.appendChild(checkbox_container)


 // cria o parágrafo que contém o nome do item e joga na variável nome_do_item
 const nome_do_item = document.createElement("p")

 // cria um id para o item jogado na lista de compras
 nome_do_item.id = "titulo-do-item"

 //joga o valor digitado no campo, que foi guardado na variável item, na propriedade innerText da variável nome_do_item
 nome_do_item.innerText = item.value

 // faz com que a nova div criada receba o parágrafo como seu filho
 container_nome_do_item.appendChild(nome_do_item)


 // cria a div que contém os botões de editar e deletar
 const botoes_editar_deletar = document.createElement("div")

 // adiciona a classe "botoes-editar-deletar" à nova div criada
 botoes_editar_deletar.classList.add("botoes-editar-deletar")

 // faz com que a div container-item-da-lista receba a div botoes-editar-deletar como sua filha
 container_item_da_lista.appendChild(botoes_editar_deletar)

 // cria os botões de deletar e editar
 const botao_deletar = document.createElement("button")
 const botao_editar = document.createElement("button")

 // faz com que a nova div criada acima receba os dois botões como seus filhos
 botoes_editar_deletar.appendChild(botao_deletar)
 botoes_editar_deletar.appendChild(botao_editar)

 // atribui a classe específica dos botões
 botao_deletar.classList.add("botao-acao")
 botao_editar.classList.add("botao-acao")

 // cria as tags img para os dois botões
 const imagem_deletar = document.createElement("img")
 const imagem_editar = document.createElement("img")

 // joga as imagens respectivas dentro dos botões
 imagem_deletar.src = "img/delete.svg"
 imagem_editar.src = "img/edit.svg"

 //dá a possibilidade de chamar a função de deletar um item por intermédio de um listener
 // de eventos usado no botão de deletar
 botao_deletar.addEventListener("click", function() {

    deletar_item(item_da_lista)

 } )

 //dá a possibilidade de chamar a função de editar um item por intermédio de um listener
 // de eventos usado no botão de editar
 botao_editar.addEventListener("click", function() {

    editar_item(item_da_lista)

 } )

 // atribui textos alternativos às imagens
 imagem_deletar.alt = "Ícone de deletar"
 imagem_editar.alt = "Ícone de editar"

 // faz com que os botões recebam as imagens como filhas
 botao_deletar.appendChild(imagem_deletar)
 botao_editar.appendChild(imagem_editar)

 // cria um elemento "p" e joga na variável que guardará a data de inserção do item
 const data_insercao_do_item = document.createElement("p")

 //define o texto que vai "preencher" a variável data_insercao_do_item
 // usa o objeto Date() e suas conversões e formatações
 data_insercao_do_item.innerText = `Item adicionado ${new Date().toLocaleDateString ("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`

 // atribui a classe correspondente à variável da data de inserção de cada item
 data_insercao_do_item.classList.add("item-lista-data")

 //torna a variável data_insercao_do_item filha de sua div correspondente
 item_da_lista.appendChild(data_insercao_do_item)

 return item_da_lista
}
