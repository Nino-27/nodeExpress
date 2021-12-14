const boton = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const password = document.getElementById('password');

boton.addEventListener('click', ()=> {
    
    let nom = nombre.value;
    let pass = password.value;

    let usuario = {
        nombre: nom,
        password: pass
    }

    // fetch axios
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
   posteaYdameDatos(options);
})

async function posteaYdameDatos(options) {
    const respuesta = await fetch('/usuarioDatos', options)
    const aJson = await respuesta.json();

    console.log('aJson: ', aJson);
}


// dame score
async function dameScore() {
    const {data} = await axios.get('/index');
    console.log(data.score);
    let h1 = document.createElement('h1');
    h1.innerHTML = data.score;
    document.body.appendChild(h1)
}

dameScore();

