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
    await sleep(3000);
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

function edad() {
    const birth = new Date()
    const year = 2000,
        month = 4,
        day = 22
    var edad = birth.getFullYear() - year
    if (birth.getMonth() - (month - 1) >= 0) {
        if (birth.getDate() - day < 0 && birth.getMonth() - (month - 1) === 0) {
            edad = edad - 1
        }
    } else {
        edad = edad - 1
    }
    console.log(birth.getDate() - 22)
    console.log(edad)
    document.getElementById('edad').innerHTML = edad + ' years old'
}
edad();
transicion();