import { criar_item } from "./criar-item.js"
import { verificar_lista_vazia } from "./verificar-lista-vazia.js"

// joga a "ul" lista-de-compras em sua variável
const lista_de_compras = document.getElementById("lista-de-compras")

//joga o item digitado no input input-item em sua variável
const item = document.getElementById("input-item")



export function adicionar_item(evento){

    // previne que o console do browser seja atualizado no click do botão
    evento.preventDefault()

    // testa se o usuário digitou algo além de espaços vazios. Se não digitou nada além de espaços vazios, dá um early return
    if (item.value.trim() === "" ) {

        alert("Digite o nome de um item.")
        return
    }

    // notar que a função adicionar_item é quem chama a função de criar o item
    const item_da_lista = criar_item(item)


    // faz com que nossa lista como um todo (elemento "ul" jogado na variável lista_de_compras) receba o novo elemento de lista "li" como seu filho
    lista_de_compras.appendChild(item_da_lista)

    verificar_lista_vazia(lista_de_compras)

    item.value = ""

}