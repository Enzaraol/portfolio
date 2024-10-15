const cells = document.querySelectorAll('.cell')

let list = []; //defino como let pois o valor da lista será removido posteriormente
const pig = 'imgs/pig.jpg';
const cat = 'imgs/cat.jpg';
const dog = 'imgs/dog.jpg';
list.push(pig, cat, dog)

const resetList = [];
resetList.push(pig, cat, dog)


//count é um objeto ou array que armazena a quantidade de vezes que cada imagem (ou valor) foi usada.
let count = {
    [pig]: 0,
    [cat]: 0,
    [dog]: 0,
}

let random; //variável que irá armazenar um valor aleatório da list

window.onload = function(){
    cells.forEach (function(cell) {
        do {
            random = list[Math.floor(Math.random() * list.length)]; //armazena de forma aleatória um dos valores da list ------- > random = list[]
        } while (count[random] >= 3); /*verifica se a quantidade de vezes que a imagem armazenada em random foi usada é maior ou igual a 3
                                       se a condição for verdadeira, gera uma nova imagem e põe dentro do objeto count */
                                       
        cell.style.backgroundImage = `url(${random})`;
        cell.style.backgroundSize = 'cover';
        count[random]++ 

        cell.setAttribute('data-random', random); //armazena o valor de random no atributo

    });

    sum = 0; //sum gerado fora da função

    cells.forEach(cell => {
        cell.addEventListener('click', function() { 
            let showRandom = cell.getAttribute('data-random'); // Recupera o valor da célula clicada
            console.log('Célula clicada:', showRandom);

            if (sum === 0){
                initialValue = showRandom; // define o valor do primeiro clique de inicio/reinicio como o valor da célula clicada (showRandom)
                sum++; // inicia a contagem
                
            // cria uma variável para verificar se a célula possui um elemento com a classe .hide e armazena em hideDiv = <div class="hide"></div>
                const hideDiv = cell.querySelector('.hide');
                if (hideDiv) { // se a célula tiver hideDiv, remove
                    hideDiv.remove();
                };

                return; //interrompe a execução do código
            };
            if (showRandom === initialValue) { //se o valor do clique for igual ao valor da última imagem armazenada, soma 1
                sum++; //sendo o clique = showRandom
                const hideDiv = cell.querySelector('.hide');
                if (hideDiv) {
                    hideDiv.remove(); 
                };

                if (sum === 3){
                    sum = 0;
                    initialValue = null; //reseta o valor inicial
                    list = list.filter(item => item !== random); //se soma igual a 3, remove o valor atual de random na lista
                    random = list[Math.floor(Math.random() * list.length)] // escolhe um novo valor aleatório da lista.

                };

            } else {
                cells.forEach(cell => {
                    sum = 0;
                    if (!cell.querySelector('.hide')) {
                        const hideDiv = document.createElement('div');
                        hideDiv.classList.add('hide');
                        cell.appendChild(hideDiv);
                        list = resetList //reseta a lista que havia perdido o valor do random por conta da condição (if sum === 3)
                    };
                });
            };
        });
    });
};

// função para iniciar o jogo
button = document.querySelector('.button')
button.addEventListener('click', function(){
    cells.forEach(cell => {
        const hideDiv = document.createElement('div'); //cria um elemento div, adiciona a classe e adiciono ao elemento cell como filho
        hideDiv.classList.add('hide');
        cell.appendChild(hideDiv);
    });
});

