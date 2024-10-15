let range = document.querySelector('#range')
let rangeValue = document.querySelector('#rangeValue')
const checkUpper = document.querySelector('#checkbox-upper')
const checkNum = document.querySelector('#checkbox-num')
const checkSym = document.querySelector('#checkbox-symbol')

/*enquanto o input é arrastado,  */
range.addEventListener('input', function(){
    //lógica para criação da lista de algarismos
    let sum = 0;
    let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (checkUpper.checked){
        upper = list.map(letter => letter.toUpperCase());
        list = list.concat(upper)
        sum++;
    }  
    
    if (checkNum.checked){
        num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        list = list.concat(num)
        sum++;
    }

    if (checkSym.checked){
        sym = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',   '-', '_', '=', '+', '{', '}', '[', ']', '|',   ':', ';', '"', "'", '<', '>', ',', '.', '?', '/' ]
        list = list.concat(sym)
        sum++;
    }
    // lógica para criação da senha
    password = '';
    for (i = 0; i < range.value; i++){
        password = password + list[Math.floor(Math.random()*list.length)] // utilizo a propriedade Math.random que seleciona um valor entre 0 e 1 e multiplico
    }                                                                   // pelo tamanho da lista low, pois assim ele pode percorrer todos os itens da lista
    let text = document.querySelector('#text')                          // e por fim selecionar apenas um item low[item] durante um loop que percorre o valor do range
    text.value = password // implica o valor da senha no input

    rangeValue.innerHTML = (`${range.value} caracter(es)`) // altera o valor do range no label
    
    levelPass(sum, range)
    
})


// função para copiar a senha
const icon = document.querySelector('#icon')
icon.addEventListener('click', function(){
    text.select();
    text.setSelectionRange(0, 99999); // Para dispositivos móveis
    navigator.clipboard.writeText(text.value).then(() => {
        alert('Senha copiada')
    })
})

// função para verificar o nível dela e atribuir uma cor


function levelPass(sum, range){
// últimos parâmetros
    if (range.value >= 8){
        sum += 4;
    } else if (range.value >= 5 && range.value < 8){
        sum += 3;
    }

    span = document.querySelector('#span')
    span.style.display = 'inline' // torno o span visível criando uma ocupação em uma parte da tela (por isso n alterei a visibilidade simplesmente) 

// atribuição de cor
    if (sum == 7){  // senha forte
        text.style.color = 'green'
        span.style.color = 'green'
        span.innerHTML = 'Senha forte'

    } else if (sum >= 4 && sum < 8){  //senha média
        text.style.color = '#B8860B'
        span.style.color = '#B8860B'
        span.innerHTML = 'Senha média'
    } else {
        text.style.color = 'red'  //senha fraca
        span.style.color = 'red'
        span.innerHTML = 'Senha fraca'
    }
}