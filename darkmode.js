const dark = document.getElementById('dark');
const light = document.getElementById('light');
const tabelaTarefa = document.getElementById('tabela-tarefa');
const aspiral = document.getElementsByClassName('aspiral');

function darkMode(){

    document.body.style.background = 'black';
    document.body.style.color = 'white';
    tabelaTarefa.style.background = 'rgb(43, 39, 39)';
    dark.style.display = 'none';
    light.style.display = 'block';
    light.style.animation = 'loading 0.5s linear';

    for(i = 0; i < 7; i++){

        aspiral[i].classList.add('aspiral-dark-mode');

    }
}

function lightMode(){

    document.body.style.background = 'rgb(177, 177, 211)';
    document.body.style.color = 'black';
    tabelaTarefa.style.background = 'rgb(216, 215, 215)';
    dark.style.display = 'block';
    light.style.display = 'none';
    dark.style.animation = 'loading 0.5s linear';

    for(i = 0; i < 7; i++){

        aspiral[i].classList.remove('aspiral-dark-mode');

    }
}