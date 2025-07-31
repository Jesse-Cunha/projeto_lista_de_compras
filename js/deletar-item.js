import { verificar_lista_vazia } from "./verificar-lista-vazia.js"

const lista_de_compras = document.getElementById("lista-de-compras")

const deletar_item = (elemento) => {

    //notar esse pop-up de mensagem com confirmação booleana
    let confirmacao = confirm("Deseja prosseguir com a exclusão desse item?")

    if (confirmacao) {

        elemento.remove()

        verificar_lista_vazia(lista_de_compras)

    }
}

export {deletar_item}