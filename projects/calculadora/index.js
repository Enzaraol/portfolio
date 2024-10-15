function clean(){
    const result = document.querySelector('#result').value
    document.querySelector('#result').value = ''
}

function invert(){
   let result = document.querySelector('#result').value 
    document.querySelector('#result').value = result * (-1)
}

function addCharacter(character){
   let result = document.querySelector('#result').value
    document.querySelector('#result').value = result + character

}

function showResult(){
   const result = document.querySelector('#result').value
    document.querySelector('#result').value = eval(result)

}