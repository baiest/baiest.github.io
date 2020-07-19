function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function transicion() {
    cuadro = document.getElementById('cuadro');
    var datos = [
        "./images/anima/1.png",
        "./images/anima/2.png",
        "./images/anima/3.png",
        "./images/anima/4.png",
    ];
    var a = 0
    await sleep(5000);
    while (a < 20) {
        for (i = 0; i < datos.length; i++) {
            cuadro.innerHTML = "<img class = 'img-fluid mx-auto d-block' src =" + datos[i] + ">";
            await sleep(200);
        }
        await sleep(400);
        for (i = datos.length - 1; i > 0; i--) {
            cuadro.innerHTML = "<img class = 'img-fluid mx-auto d-block' src =" + datos[i] + ">";
            await sleep(200);
        }
        a++;
    }
    cuadro.innerHTML = '';
}

transicion();
