class Usuario{
    //Este es mi constructor e
    constructor(nombre,  email, foto){
        this.nombre = nombre;
        this.email = email;
        this.foto = foto;
    }


    mostrar(){
        return `
        <div class="card">
        <img src ="${this.foto}"alt="${this.nombre}">
        <h3>${this.nombre}</h3>
        <p>${this.email}</p>
        </div>
        `;
    }
};


const renderUsuario = (usuarios) => {
    const contenedor = document.getElementById("usuarios");
    contenedor.innerHTML = usuarios.map(u => u.mostrar()).join("");
};

const obtenerUsuarios = async (cantidad) => {
    try {
        const respuesta 
        = await fetch(`https://randomuser.me/api/?results=${cantidad}`);
        const datos = await respuesta.json();

        let listaUsuarios = [];

        datos.results.forEach((u) => {
            listaUsuarios.push(new Usuario(u.name.first, u.email, u.picture.medium));
        });

     } catch (error) {
        }
}

const boton = document.getElementById("btnCargar");
boton.addEventListener("click", () => obtenerUsuarios(3))