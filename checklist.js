function novaTarefa(){

    const lista = document.querySelector('ul'); //elemento pai
    const criarTarefa = document.createElement('p'); //elemento filho
    const inserirTarefa = document.form_main.task.value; //nome da tarefa
    const textoTarefa = document.createTextNode(inserirTarefa); //guardar o texto da tarefa

    if(inserirTarefa === ""){ //checa se foi digitado alguma palavra na caixa 'nova tarefa'
        alert('Por favor, insira uma tarefa.');
    }else if(inserirTarefa.length > 20){ //verifica se a tarefa tem no máximo 20 caracteres, se tiver mais, da o alerta
        alert('Sua tarefa não pode ter mais que 20 caracteres.');
    }else{        
        criarTarefa.appendChild(textoTarefa); //adiciona o texto da tarefa no P (elemento filho)
        lista.appendChild(criarTarefa);  //adiciona o P (elemento filho) com o texto da tarefa no UL (elemento pai)
        document.form_main.task.value = ""; //após digitar e adicionar, a caixa de escrever fica vazia

        removerTarefa(criarTarefa); //chama a função que adiciona o botão 'X' ao lado da tarefa
    }
}

function removerTarefa(criarTarefa){ //função de adicionar o botão que remove uma tarefa
        const botaoRemover = document.createElement('BUTTON'); //cria o botão
        const textoBotao = document.createTextNode(' X '); //adiciona o texto 'X'

        botaoRemover.appendChild(textoBotao); //adicionar o texto no botão
        criarTarefa.appendChild(botaoRemover); //cria o botão já com o texto em cada p(paragrafo) criado
        botaoRemover.classList.toggle('button-delete'); //adiciona uma classe no botao remover

        botaoRemover.addEventListener('click', () => { //evento que ao clicar no botão remover, ele deleta o item
            botaoRemover.parentElement.innerHTML = "";
        })
}

   document.querySelector('ul').addEventListener("click", function(paragrafo){ //função que ao clicar no P, ele ganha a classe check
        if (paragrafo.target.tagName === 'P')
        paragrafo.target.classList.toggle('check');
})


function reiniciarLista(){

    const tituloLista = document.querySelector('h2'); //seleciona o h2 (onde fica o nome da LISTA)
    const lista = document.querySelector('ul'); //seleciona o UL (onde vai armaneza as tarefas inseridas)

    lista.innerHTML = "";     //remove tudo que está dentro do UL
    tituloLista.innerHTML = "Tarefas:"; //volta o nome original que está no HTML
}

function renomearLista(){

    const tituloLista = document.querySelector('h2'); //seleciona o h2 (onde fica o nome da LISTA)
    const novoNomeLista = document.form_main.list.value; //novo nome da lista

    if(novoNomeLista === ''){ //verifica se foi inserido alguma nome para a lista
        alert('Insira um nome válido.');
    }else if (novoNomeLista.length > 25){ //verifica se o novo nome da lista tem até 15 caracteres, se tiver mais, da o alerta
        alert('O nome da sua lista deve ter no máximo 25 caracteres.');
    }
    else{
        tituloLista.innerHTML = novoNomeLista; //adiciona o novo nome da lista
        document.form_main.list.value = ""; //remove o que ta escrito na caixa de inserir novo nome para a lista
    }
}