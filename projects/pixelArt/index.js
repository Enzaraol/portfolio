rangeColumn = document.querySelector('#range-column')
rangeRow = document.querySelector('#range-row')
button = document.querySelector('#button')
container = document.querySelector('.container-divs')

// evento para gerar divs e organizar por colunas e linhas
    button.addEventListener('click', function(){
        const columns = rangeColumn.value
        const rows = rangeRow.value
        const total = columns * rows
        container.innerHTML = ''

        for (i = 0; i < total; i++){
            div = document.createElement('div')
            div.classList.add('cell')
            container.style.gridTemplateColumns = `repeat(${columns}, 20px)`
            container.style.gridTemplateRows = `repeat(${rows}, 20px)`
            container.appendChild(div)
        }

// eventos com o mouse para alterar a cor da célula
        cells = document.querySelectorAll('.cell')
        color = document.querySelector('#color')

        cells.forEach(cell => {
            cell.addEventListener('mousedown', function(){
                isMouseDown = true // marca o mouse como pressionado 
                cell.style.backgroundColor = `${color.value}` 
            });
            
            cell.addEventListener('mousemove', function(){ //se o mouse estiver se movendo pelas células, verifica se o mouse está pressionado
                if (isMouseDown) {
                    cell.style.backgroundColor = `${color.value}` 
                };
            });

            document.addEventListener('mouseup', function() { //document ao invés de cell pois o evento precisa ser detectado globalmente pela página ao invés de somente na célula
                isMouseDown = false; // mouse pressionado = falso
            });
        });

// reseta o valor da célula
        reset = document.querySelector('#reset')
        reset.addEventListener('click', function(){
            color.value = '#f2f2f2';
        });
    });

// altera o texto da coluna e da linha
    labelColumn = document.querySelector('#label-column')
    rangeColumn.addEventListener('input', function(){
        labelColumn.textContent = `${rangeColumn.value} Coluna(s)`
    });
    
    labelRow = document.querySelector('#label-row')
    rangeRow.addEventListener('input', function(){
        labelRow.textContent = `${rangeRow.value} Linha(s)`
    });

    