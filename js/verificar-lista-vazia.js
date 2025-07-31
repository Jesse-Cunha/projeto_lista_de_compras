const mensagem_lista_vazia = document.getElementById("mensagem-lista-vazia")

// verifica se a lista está vazia para exibir a mensagem de lista vazia
export function verificar_lista_vazia(lista) {

    if (lista.querySelectorAll("li").length === 0) {

        mensagem_lista_vazia.style.display = "block"

    } else {

        mensagem_lista_vazia.style.display = "none"
    }

}