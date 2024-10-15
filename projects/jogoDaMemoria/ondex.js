
const count = {
    [pig]: 0,
    [dog]: 0,
    [cat]: 0,
}

window.onload = function(){
    cells.forEach(function(cell) {
            let random;
            do {
                random = list[Math.floor(Math.random() * 3)];
            } while (count[random] >=3);
            cell.style.backgroundImage = `url(${random})`;
            cell.style.backgroundSize = 'cover';
            count[random]++;

        });
};

