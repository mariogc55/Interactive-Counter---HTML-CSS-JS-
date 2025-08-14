const contadorDisplay = document.getElementById('contador-display');
const restarBtn = document.getElementById('restar-btn');
const sumarBtn = document.getElementById('sumar-btn');

let contador = 0;

contadorDisplay.textContent = contador;

restarBtn.addEventListener('click', () => {

if (contador > -10) {
    contador--;
    contadorDisplay.textContent = contador;

    if (contador === -10) {
    restarBtn.disabled = true;
    alert('¡El contador ha llegado al limite de -10!');
    }
    sumarBtn.disabled = false;
}
});

sumarBtn.addEventListener('click', () => {
if (contador < 10) {
    contador++;
    contadorDisplay.textContent = contador;
    if (contador === 10) {
    sumarBtn.disabled = true;
    alert('¡El contador ha llegado al limite de 10!');
    }
    restarBtn.disabled = false;
}
});