//OBJETOS//
const Coche = {
    marca:"" ,
    modelo:"",
    matricula:"" ,
}
const Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:"",
}
const FullStackDeveloper = {
lenguajes:[],
proyectos:[],

}

const Perro = {
nombre:"",
raza:"",
color:"",
edad:"",
ladrar : function () {
    console.log("guau")
},
popo: function() {
  return  Math.random() * 3
}
}

//LECTURA PROPIEDADES//
let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];

//MODIFICACION PROPIEDADES//
Portatil.modelo="P345";
 Concierto.cartelera.push("Guns N' Roses");
 Concierto.fecha= new Date();
 Impresora.imprimiendo=objeto={
    nombreArchivo:"",
    copias:"",
    numPaginas:"",
 }

 //Iteraciones ⚔️ Pair Programming ⚔️//
 const Noticia={
    titular:"",
    cuerpo:"",
     };
     const Persona={
        nombre:"",
        apellidos:"",
        edad:"",
         };
const Avion = {
    numPasajeros:"",
    despegar: function () {
        console.log("despegando")
    },
    volar: function () {
        console.log("llegando al destino")
    },
    aterrizar: function () {
        console.log("aterrizando")
    },
}
const Paquete={
    contenido:[],
}
const Pais= {
    numHabitantes:"",
    continente:"",
    gentilicio:"",
}
//Lectura de propiedades//
let codError=O_Error.codigo;
let integrantes=Grupo.integrantes;
let nivelesTinta=Impresora.tinta;
let pixeles=Pantalla.pixeles;
let especificaciones=Movil["especificaciones"] ;
//Modificación de propiedades//
Grupo.numIntegrantes=5;
Pantalla.dimensiones="1920x1080";
Led.encendido=true ? false:true;
Movil.temperatura="20º";
