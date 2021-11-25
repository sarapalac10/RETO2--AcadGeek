//Listener del botón
var btnRegistrar = document.querySelector('#boton-enviar');

function crearRegistro() {
    
    //Registro de los campos del formulario
    var nombreFormulario = document.querySelector('#user-name').value ;
    var apellidoFormulario = document.querySelector('#user-lastname').value;
    var telefonoFormulario = document.querySelector('#user-phone').value;
    var direccionFormulario = document.querySelector('#user-adress').value;
    var comentarioFormulario = document.querySelector('#comentario').value;

    //Crear al objeto
    objRegistrado = new Registro(nombreFormulario, apellidoFormulario, telefonoFormulario, direccionFormulario, comentarioFormulario);

    //Guardar en localStorage (Convertir a un formato Json, castear el objeto) El objeto se llama "registros"
    localStorage.setItem("registros",JSON.stringify(objRegistrado))
    
    //Obtener lo creado. Se debe convertir
    var objRegistradoRecibido = JSON.parse(localStorage.getItem("registros"));
    console.log(objRegistradoRecibido);

    document.write("El registro es: " + objRegistradoRecibido.Nombre +" " + objRegistradoRecibido.Apellido ) 
};

//Creación de función para el registro

function Registro(rnombre, rapellido, rtelefono, rdireccion, robservaciones){
    this.Nombre = rnombre;
    this.Apellido = rapellido;
    this.Telefono = rtelefono;
    this.Direccion = rdireccion;
    this.Comentario = robservaciones; 
}

