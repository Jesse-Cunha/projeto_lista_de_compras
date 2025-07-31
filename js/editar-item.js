const editar_item = (elemento) => {

    // notar esse pop-up com mensagem E campo para inserção de texto
    let novo_nome_do_item = prompt("Digite o novo item:")

    if (novo_nome_do_item !== null && novo_nome_do_item.trim() !== "")  {

        const nome_do_item_atualizado = elemento.querySelector("#titulo-do-item")

        nome_do_item_atualizado.textContent = novo_nome_do_item

        const ja_comprado = elemento.querySelector(".checkbox-input").checked

        if (ja_comprado) {

            elemento.querySelector(".checkbox-customizado").classList.add("checked")

            nome_do_item_atualizado.style.textDecoration = "line-through"

        }
    }
}

export {editar_item}