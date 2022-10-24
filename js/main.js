
/* ---------- Creamos la funcion y evento para listar los productos---------- */      

let carrito = [];
let contenedor = document.getElementById("ListProdcuts");                       // Traemos el nodo que tiene el atributo product.

let butt1 = document.getElementById("btn1");                                    // Traemos el nodo que tiene el atributo btn1.
let butt2 = document.getElementById("btn2");                                    // Traemos el nodo que tiene el atributo btn1.
let butt3 = document.getElementById("btn3");                                    // Traemos el nodo que tiene el atributo btn1.
let butt4 = document.getElementById("btn4");                                    // Traemos el nodo que tiene el atributo btn1.

const prelistadoa = async () => {                                               // Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data1.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const data = await resp.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    listados(data)
} 
const prelistadoc = async () => {                                               // Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data2.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const data = await resp.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    listados(data)
}
const prelistadod = async () => {                                               // Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data3.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const data = await resp.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    listados(data)
}


const listados = async (data) => {                                              // Creamos la funcion listado, para recorrer el array que contiene el archivo JSON y llamarla mas cuando hacemos click en el boton de sleccion de tipo de bicicleta.
    
    data.forEach(item => {                                                      // Recorremos todo el Array compuesto por objetos.       
        let div = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div.className = "card text-center m-2 tarjeta1";
        div.style = "width: 24rem;";
        div.innerHTML = `              
                                        <img src="${item.img}" class="card-img-top img-fluid tarjeta1__img" id="Slash" alt="Imagen-de-Bicicleta-Trek">
                                        <div class="card-body">
                                            <h3 class="card-title letraTexto2">${item.brand} ${item.model}</h3>
                                            <p class="card-text">Año: ${item.year}</p>
                                            <p class="card-text">Precio: u$s ${item.price}</p>
                                            <button class="botonPages" id = "sold${item.id}"><a href="#"></a>Comprar</button>
                                            <button type="button" id = "boton${item.id}" class="botonPages" data-bs-toggle="modal" data-bs-target="#modal-img-${item.id}">Ver Galeria</button>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="modal-img-${item.id}" tabindex="-1" aria-labelledby="modal-label-${item.id}" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="modal-label-${item.id}">Trek Slash 9.9</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>  
                                            <div class="modal-body">
                                                <div id="carouselExampleControls-${item.id}" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src="${item.img}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                        </div>  
                                                            <img src="${item.img2}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="${item.img3}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-${item.id}" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Anterior</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-${item.id}" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Siguiente</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                         `;                                                     // Introducimos en el HTML el listado de productos.
        contenedor.appendChild(div);                                            // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        
        addBtn = document.getElementById(`sold${item.id}`);                     // Traemos a los objetos .ID.    
        addBtn.addEventListener("click", () => {
            addCarrito(item.id);
        })
    })
    let div2 = document.createElement("div");    
    div2.className = "botonLimpiar";                                                                           
    div2.innerHTML= `<button onclick = "cleanpage()" class="botonPages2" >Limpiar Listado</button>`;   // Creamos un boton al final de la pagina para limpiar el listado de productos.
    contenedor.appendChild(div2);
    
}
 
butt1.addEventListener("click", prelistadoa);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click", prelistadoa);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt3.addEventListener("click", prelistadoc);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt4.addEventListener("click", prelistadod);                                       // Utilizando el Evento Clic Creamos el listado de productos.

const cleanpage = () => {                                                           // Como dice la funcion limpia la pagina, limpiamos el listado para poder visualizar otro tipo de contenido.
    contenedor.innerHTML  = " ";                                                    // Insertamos un string vacio en nuestra variable "contenedor" que nos trae el nodo que representa el listado en el HTML.
}
                                        

/* ---------- Opcion para buscar un Producto ---------- */      


let formulario2 = document.getElementById("form1");                             // Traemos el nodo que tiene el atributo form2.
let filters = document.getElementById("filter");                                // Traemos el nodo que tiene el atributo filter.
const datax = [];

let buscar2 = async () => {                                                     // Creamos la funcion listado, para recorrer el array y llamarla mas adelante. Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp1 = await fetch ("./json/data1.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const resp2 = await fetch ("./json/data2.json")
    const resp3 = await fetch ("./json/data3.json")
    
    const data1 = await resp1.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    const data2 = await resp2.json();
    const data3 = await resp3.json();


    const datax = data1.concat(data2, data3);
    console.log(datax);
    return datax
}

formulario2.addEventListener("submit", async (e) => {                           // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina, la convertimos en asincronica a la funcion para poder llamar a la funcion buscar2 y asi poder poder esperar a que nos devuelva el array, sino se tranforma en asincronica al llamar la funcion y pedirle los datos el estado de la llamada seria pendiente..
    e.preventDefault();                                                         // Prevenimos que la pagina se recargue al dar click en submit.
    let findBrand = e.target.children;                                          // Capturamos las entradas del formulario y la asignamos a la variable findBrand, nos trae un HTML Collection.                           
    let brandValue = findBrand[0].value;                                        // Asginamos a la variable  brandValue el el valor(value) de la etiqueta(tag) en la posicion 0 del nodo padre "form2", nos devuelve el texto tal cual lo escribimos.
   
    let datas = await buscar2();                                                // Llamamos a la funcion buscar2 que nos trae el array con los productos
    const result = datas.filter(car => car.brand === brandValue.toUpperCase()); // Usamos el Metodo Filter para que busque en el Array de productos la marca que necesitamos.
   
    result.forEach(item => {                                                    // Recorremos el array que nos entrego el metodo Filter.
        let div = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div.className = "card text-center m-2 tarjeta1";
        div.style = "width: 24rem;";
        div.innerHTML = `                                                       
                                    <img src="${item.img}" class="card-img-top img-fluid tarjeta1__img" id="Slash" alt="Imagen-de-Bicicleta-Trek">
                                    <div class="card-body">
                                        <h3 class="card-title letraTexto2">${item.brand} ${item.model}</h3>
                                        <p class="card-text">Año: ${item.year}</p>
                                        <p class="card-text">Precio: u$s ${item.price}</p>
                                        <button class="botonPages"><a href="#"></a>Comprar</button>
                                        <button type="button" id = "boton${item.id}" class="botonPages" data-bs-toggle="modal" data-bs-target="#modal-img-${item.id}">Ver Galeria</button>
                                    </div>
                                </div>
                                <div class="modal fade" id="modal-img-${item.id}" tabindex="-1" aria-labelledby="modal-label-${item.id}" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title" id="modal-label-${item.id}">Trek Slash 9.9</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>  
                                        <div class="modal-body">
                                            <div id="carouselExampleControls-${item.id}" class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="${item.img}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                    </div>  
                                                        <img src="${item.img2}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${item.img3}" class="d-block w-100" alt="Imagen-de-Bicicleta-Trek">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-${item.id}" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Anterior</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-${item.id}" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Siguiente</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>     
                        `;                                                          // introducimos en el HTML el listado del producto que filtramos.
        filters.append(div);                                                        // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        });   
});   

/* ---------- Busqueda del Producto para luego añadir al Carrito de compras---------- */


const addCarrito = async item3 => {                                                 // Creamos la funcion para agregar items al carrito.
    let datas2 = await buscar2();                                                   // Añadimos a la variable datas2 el contenido de los documentos JSON, que lo traemos con la funcion buscar2.
    const itemID = datas2.find((item2) => item2.id === item3)                       // Utilizando el metodo find, para que nos devuelva el primer elemento que coincide con el array.
    carrito.push(itemID);                                                           // Introducimos con el metodo PUSH el resultado de la funcion find, al array de nuestro carrito.
    carritoUpload();
};

/* ---------- Carrito de compras---------- */

let containerCarrito = document.getElementById("Container-carrit");                 // Llamamos al nodo Container-carrit.
const totalCarrit = document.getElementById("precioTotal");                         // Llamamos al nodo precioTotal, para luego sumar el total.
const contCarrit = document.getElementById("contadorCarrito");                      // Llamamos al nodo contadorCarrito, para luego contar los elementos del carrito.

const carritoUpload = () => {                                                       // Creamos la funcion carritoUpload, recorre el array que contiene los productos que añadimos al carrito y lo recorremos con el metodo forEach para ir añadiendo al modal los items y creado el HTML dinamicamente.
    containerCarrito.innerHTML="";                                                  // Borramos lo que tenia previamente el nodo.             
    carrito.forEach((prod) => {                                                     // Recorremos el array con el metodo forEach, y cremos el contenido del modal con los productos.
        const div = document.createElement("div")
        div.className = "productInCart";
        div.innerHTML = `
                    <h5 class="card-title"> Marca: ${prod.brand} </h5>           
                    <p> Modelo: ${prod.model} </p>      
                    <p> Precio $${prod.price} </p>
                    <button  onclick = "deleteCarrito(${prod.id})" class="productInCart_delete"><svg xmlns="http://www.w3.org/2000/svg"  class="productInCart_delete_img" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg></button>
                    `
        containerCarrito.appendChild(div);                                          // Introducimos el contenido como hijos del div.
        localStorage.setItem(`carrito`, JSON.stringify(carrito));                   // Guardamos en el localStorage el contenido del carrito.
    })
    contCarrit.innerHTML = carrito.length                                           // Aca contamos la longitud del array del carrito de compras, y ese nro es el indice del carrito.            
    totalCarrit.innerText = carrito.reduce((acum, item) => acum + item.price, 0);   // Por cada ciclo de for, con el metodo reduce, guardamos en el acumulador el precio y lo vamos sumando para obtener el total.
};

/* ---------- Funcion Eliminar del Carrito---------- */

const deleteCarrito = (item) => {                                                   // Creamos una funcion para eliminar productos del carrito de compras.                         
    const indice = carrito.indexOf(item);                                           // El parametro item de la funcion recive el N° de ID del boton del elemento que se desea borrar, paraluego usar el metodo splice y borrrarlo. 
    carrito.splice(indice, 1)                                                       
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    carritoUpload();
    Swal.fire({                                                                     // Usamos la libreria SweetAlert para mostrar un mensaje personalizado.
        position: 'top-end',
        icon: 'success', 
        title: 'Producto Eliminado !',
        showConfirmButton: false,
        timer: 3000,
    });
}

/* ---------- Funcion Vaciar el Carrito---------- */

const btnVaciar = document.getElementById("vaciar-carrito");                        // Llamamos al nodo vaciar-carrito.
btnVaciar.addEventListener("click", () => {                                         // Ahora agremos un evento al boton.
    carrito.length = 0;                                                             // Le decimos que su longitud en el array es igual a 0,
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    carritoUpload();                                                                // Actualizamos el carrito.
});

/* ---------- Local Storage del Carrito ---------- */

 document.addEventListener(`DOMContentLoaded`, () => {                              // Llamamos al evento cuando se carga el documento.
     
 localStorage.getItem(`carrito`) ? carrito = JSON.parse(localStorage.getItem(`carrito`)) : [];     // Si en el local Sorage se encuentra el objeto carrito. Entonces parseamos esa info, la convertimos a JS y la sino vaciamos el array.
 carritoUpload()

}); 


/* ---------- Sesion de Usuario / Session Storage ---------- */

let usuario;                                                                        // Creamos la variable usuario
let usuarioStorage = sessionStorage.getItem("usuario");                             // Traemos del sessionStorage el contenido de la variable



if(usuarioStorage){                                                                 // Si la variable tiene contenido, entonces muestro muesta el cartel con el contenido.
    Swal.fire({
        title: `Bienvenido Usuario ${usuarioStorage} `,
      })
}else{
    Swal.fire({
        title: 'Ingrese su Nombre de Usuario ',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Continuar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => { 
            sessionStorage.setItem("usuario", login);                               // Guardamos en sessionStorage el contenido de la variable usuario.  
            Swal.fire({
                title: `Bienvenido Usuario ${login} `,
              })
        },
      })
}

/* ---------- Cargar Contenido de Pagina Contactos ---------- */      

                      
const contentmain = document.getElementById("contentBody");                         // Traemos el nodo que tiene el atributo contentBody y le asignamos la variable contentmain.
let butt5 = document.getElementById("btn5");                                        // Traemos el nodo que tiene el atributo btn5.


const LoadContact =  () => {                                                        // Creamos la funcion listado, para recorrer el array que contiene el archivo JSON y llamarla mas cuando hacemos click en el boton de sleccion de tipo de bicicleta.
        contentmain.innerHTML  = "";                            
        contentmain.innerHTML  = `<section class="section secform" id="secContac"></section>`
        let contenedorContact = document.getElementById("secContac"); 
        let article1 = document.createElement("article");                           // Creamos un article para introducir el contenido de la pagina contactos.

        article1.innerHTML = `              
                                <h2 class="titulo-formulario letraTitulo1">Registrar Usuario</h2>
                                <form  class="formulario">
                                    <div class="formulario_input">
                                        <label  for="Campo_Nombre"><b>Ingrese Nombre</b></label>
                                        <input type="text" id="Campo_Nombre" value="Ej: Pedro" required>
                                    </div>
                                    <div class="formulario_input">
                                        <label for="Campo_Apellido"><b>Ingrese su Apellido</b></label>
                                        <input type="text" id="Campo_Apellido" value="EJ: Messi" required>
                                    </div>
                                    <div class="formulario_input">
                                        <label for="Campo_Email"><b>Ingrese su Email</b></label>
                                        <input type="email" id="Campo_Email" value="Nombre@email.com">
                                    </div>
                                    <div class="formulario_input">
                                        <label for="Campo_Celular"><b>Ingrese Su Celular</b></label>
                                        <input type="text" id="Campo_Celular" placeholder="Ingrese su Número de Teléfono" value="*54-9-351-5555555">
                                    </div>
                                    <div class="formulario_input">
                                        <label for="Campo_Fecha_Nacimiento"><b>Ingrese su Fecha de Nacimiento</b></label>
                                        <input type="date" id="Campo_Fecha_Nacimiento" value="1950-09-18">
                                    </div>  
                                    <div class="formulario_input">
                                        <label for="text"><b>Elija su Sexo</b></label>
                                        <select name="text" id="text">
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
                                    </div>
                                    <div class="formulario_input">
                                        <p>Lea los terminos y condiciones y haga clic para aceptar</p>
                                        <label for="Campo_Aceptar"><b>Acepto los Términos y Condiciones</b></label>
                                        <input type="checkbox" id="Campo_Aceptar"  required  value="1">
                                    </div>
                                    <div class="formulario_input_buttons">
                                        <input type="submit" class="botonContactos">
                                        <input type="reset" class="botonContactos">
                                    </div>                   
                                </form>     
                         `;                                                     // Introducimos en el HTML el contenido.
        contenedorContact.appendChild(article1);                                // Insertamos el contenido en la etiqueta section que se creo anteriormente.
}

butt5.addEventListener("click", LoadContact);                                   // Utilizando el Evento Clic Creamos el contenido de la pagina contactos.


/* ---------- Cargar Contenido de Pagina Contactos ---------- */      

                      
// Anterionmetne ya traemos el contenido del nodo que tiene el atributo contentBody y le asignamos la variable contentmain.

let butt6 = document.getElementById("btn6");                                      // Traemos el nodo que tiene el atributo btn6.


const LoadQs =  () => {                                                           // Creamos la funcion listado, para recorrer el array que contiene el archivo JSON y llamarla mas cuando hacemos click en el boton de sleccion de tipo de bicicleta.
        contentmain.innerHTML  = "";                            
        contentmain.innerHTML  = `<article class="QuienesSomos" id="secQs"></article>`
        let contenedorQs = document.getElementById("secQs"); 
        
        contenedorQs.innerHTML = `              
                                    <h2 class="titulo_articulo mb-3 pt-3 text-center letraTitulo1"> Acerca de Market Online </h2>   
                                    <div class="card mb-3" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">    
                                                    <h3 class="card-title text-center letraTitulo1"> SOMOS </h3>
                                                    <p class="letraTexto1 pt-3">
                                                        La empresa de tecnología líder en comercio Vehículos y soluciones de venta online para tiendas. Nuestro propósito es democratizar el comercio para transformar la vida de millones de personas en   la región.
                                                    </p>
                                                </div>
                                            </div>    
                                            <div class="col-lg-6  imagenqs">
                                                <img src="./assets/images/QuienesSomos/Somos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="card mb-3" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">    
                                                    <h3 class="card-title text-center letraTitulo1"> Hacemos </h3>
                                                    <p class="letraTexto1 pt-3">
                                                        Desarrollamos productos tecnológicos que permiten a millones de usuarios comprar, vender, anunciar, enviar y pagar a través de Internet de forma fácil, segura y eficiente.
                                                    </p>
                                                </div>
                                            </div>       
                                            <div class="col-lg-6 imagenqs">
                                                <img src="./assets/images/QuienesSomos/Hacemos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="card mb-3" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">           
                                                    <h3 class="card-title text-center letraTitulo1"> Innovamos </h3>
                                                    <p class="letraTexto1 pt-3">
                                                        La tecnología es la herramienta que nos permite desarrollar soluciones escalables, capaces de generar el impacto necesario para impulsar la inclusión y el desarrollo.
                                                    </p>
                                                </div>
                                            </div>       
                                            <div class="col-lg-6 imagenqs">
                                                <img src="./assets/images/QuienesSomos/Innovamos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="card mb-3" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">           
                                                    <h3 class="card-title text-center letraTitulo1"> Cuidamos </h3>
                                                    <p class="letraTexto1 pt-3">
                                                        La sustentabilidad es un modo de hacer totalmente integrado a nuestra estrategia de negocio. Para nosotros, generar valor económico, social y ambiental van de la mano.
                                                    </p>
                                                </div>
                                            </div>       
                                            <div class="col-lg-6 imagenqs">
                                                <img src="./assets/images/QuienesSomos/Cuidamos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="card mb-3" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">           
                                                    <h3 class="card-title text-center letraTitulo1"> Trabajamos </h3>
                                                    <p class="letraTexto1 pt-3">
                                                         El ADN emprendedor que nos guía promueve una cultura que prioriza la diversidad, la autonomía y la creatividad, a través de su entorno dinámico y abierta a los riesgos.
                                                    </p>
                                                </div>
                                            </div>       
                                            <div class="col-lg-6 imagenqs">
                                                <img src="./assets/images/QuienesSomos/Trabajamos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="card mb-5" >
                                        <div class=" row g-0">    
                                            <div class="col-lg-6">
                                                <div class="card-body">           
                                                    <h3 class="card-title text-center letraTitulo1"> Comunicamos </h3>
                                                    <p class="letraTexto1 pt-3">
                                                        Somos conscientes de nuestro rol social y económico cada vez más relevante. Compartimos nuestras acciones y noticias corporativas.
                                                    </p>
                                                </div>
                                            </div>       
                                            <div class="col-lg-6 imagenqs">
                                                <img src="./assets/images/QuienesSomos/Comunicamos.jpg" class="img-fluid  rounded-end" alt="Imagen del Logo de la Pagina">
                                            </div>
                                        </div>
                                    </div>  
                            
                            `;                                                     // Introducimos en el HTML el contenido.
        contenedorQs.append();                                                 // Insertamos el contenido en la etiqueta section que se creo anteriormente.
}

butt6.addEventListener("click", LoadQs); 

/* --------------------------------------------------------------------------------- FIN ---------------------------------------------------------------------------------------- */