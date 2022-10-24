// Creamos primero la clase constructora para crear objetos de nuestros productos y añadir
// sus especificaiones de forma dinamica.

class Products{
    constructor(info){
        this.id = info.id;
        this.brand = info.brand;
        this.model = info.model;
        this.year = info.year;
        this.price = info.price;
        this.img = info.img;
        this.stock = info.stock;
        this.sold = false;
    }
} 

/* ---------- Creamos la funcion y evento para listar los productos---------- */      

let carrito = [];
let contenedor = document.getElementById("ListProdcuts");                       // Traemos el nodo que tiene el atributo product.

let butt1 = document.getElementById("btn1");                                    // Traemos el nodo que tiene el atributo btn1.
let butt2 = document.getElementById("btn2");                                    // Traemos el nodo que tiene el atributo btn1.
let butt3 = document.getElementById("btn3");                                    // Traemos el nodo que tiene el atributo btn1.
let butt4 = document.getElementById("btn4");                                    // Traemos el nodo que tiene el atributo btn1.

/* let butt2 = document.getElementById("btn2");   */                            // Traemos el nodo que tiene el atributo btn1.


const listado = async () => {                                                   // Creamos la funcion listado, para recorrer el array y llamarla mas adelante. Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data1.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const data = await resp.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.


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
    /* let div2 = document.createElement("div");
    div2.innerHTML= `<button class="botonPages" id="btn5" >Limpiar Listado</button>`;
    contenedor.appendChild(div2); */
    
}
 
butt1.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt3.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt4.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.

/* let butt5 = document.getElementById("btn5");                                 // Traemos el nodo que tiene el atributo btn5.

butt5.addEventListener("click",() => {                                          // Utilizando el Evento Clic Borramos el listado de productos.
    contenedor.innerHTML  = "";
    }); */


/* ---------- Opcion Añadir un Producto ---------- */   
/* let newCar = []; 
let formulario1 = document.getElementById("form");                              // Traemos el nodo que tiene el atributgo form.
let contenedor2 = document.getElementById("products2");                         // Traemos el nodo que tiene el atributo product.


formulario1.addEventListener("submit", (e) => {                                 // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina.
    e.preventDefault();
    let formVar = e.target.children;
    let input1 = formVar[1].value.toUpperCase();                                // Asginamos a la variable  input1 el el valor(value) de la etiqueta(tag) en la posicion 1 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.   
    let input2 = formVar[4].value.toUpperCase();                                // Asginamos a la variable  input2 el el valor(value) de la etiqueta(tag) en la posicion 4 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input3 = formVar[7].value;                                              // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 7 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.                   
    let input4 = formVar[10].value;                                             // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 10 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input5 = formVar[13].value;
    let input6 = formVar[16].value;
    cars.push(new Products({brand: `${input1}`, model: `${input2}`, year: `${input3}`, price: `${input4}`, img: `${input6}`,stock: `${input5}`, sold: false}));
    newCar.push(new Products({brand: `${input1}`, model: `${input2}`, year: `${input3}`, price: `${input4}`, img: `${input6}`,stock: `${input5}`, sold: false}));

    console.log(formVar);

    newCar.forEach(item  => {                                                    // Recorremos todo el Array compuesto por objetos.
        let div1 = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div1.innerHTML =    `
                            <div class="card" style="width: 18rem; d-flex flex-direction: row">
                                <img src= ${item.img} class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title"> Marca: ${item.brand} </h5>            
                                    <p class="card-text"> Modelo: ${item.model} </p>      
                                    <p class="card-text"> precio $${item.price} </p>
                                    <a href="#" id="agregar${item.id}" class="btn btn-primary "> Carrito </a> 
                                </div>
                            </div>    
                            `;                                                  // introducimos en el HTML el listado de productos.
        contenedor2.appendChild(div1);                                          // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        })
    }); */
               
/* ---------- Opcion para buscar un Producto ---------- */      


let formulario2 = document.getElementById("form1");                             // Traemos el nodo que tiene el atributo form2.
let filters = document.getElementById("filter");                                // Traemos el nodo que tiene el atributo filter.

let buscar2 = async () => {                                                     // Creamos la funcion listado, para recorrer el array y llamarla mas adelante. Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data1.json")                              // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea.
    const data = await resp.json();                                             // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    return data
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

/* ---------- Carrito de compras---------- */

let buscar3 = async () => {                                                         // Creamos la funcion listado, para recorrer el array y llamarla mas adelante. Colocamos async para convertirla en asyncrona a la funcion y asi poder usar el await y poder capturar la peticion de un archivo JSON.
    const resp = await fetch ("./json/data1.json")                                  // Traemos la informacion de un archivo JSON, que tiene el array con nuestros productos, utilizando el metodo fetch. El await espera a que se resuelva la promesa y  luego continua con la siguiente linea. 
    const data = await resp.json();                                                 // A la constante resp, tambien le decimos que espere con el await y  le damos formato JSON.
    return data
}

const addCarrito = async item3 => {                                                 // Creamos la funcion para agregar items al carrito.
    let datas2 = await buscar3();                                                   // Añadimos a la variable datas2 el contenido del documento JSON, que lo traemos con la funcion fetch.
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
    const item2 = carrito.find((item3) => item3.id == item)                         // Utilizando el metodo find, para que nos devuelva el primer elemento que coincide con el array que coincide con el ID del elemento seleccionado, ver que en el modal llamamos a la funcion onClick, que llama a esta funcion con el ID como variable.   
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1)                                                       //
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
    carritoUpload();                                                                // Actualizamos el carrito.
})

/* ---------- Local Storage del Carrito ---------- */

 document.addEventListener(`DOMContentLoaded`, () => {                              // Llamamos al evento cuando se carga el documento.
    if(localStorage.getItem(`carrito`)){                                            // Si en el local Sorage se encuentra el objeto carrito.    
        carrito = JSON.parse(localStorage.getItem(`carrito`))                       // Entonces parseamos esa info, la convertimos a JS y la
        carritoUpload()
    }
     
 localStorage.getItem(`carrito`) ? carrito = JSON.parse(localStorage.getItem(`carrito`)) : [];
    carritoUpload()
}) 

/* ---------- Sesion de Usuario / Session Storage ---------- */

/* let usx = document.getElementById("formNav");
let usuario;                                                                        // Creamos la variable usuario
let usuarioStorage = sessionStorage.getItem("usuario");                             // Traemos del sessionStorage el contenido de la variable "usuario".




let newUser = () => {
    usuario = prompt("Ingrese su nombre");                                          // Ingresamos por consola el nombre y se le asigna a la variable usuario.
    sessionStorage.setItem("usuario", usuario);                                     // Guardamos en sessionStorage el contenido de la variable usuario.
    alert("Bienvenido es tu primera Vez");                                          // Imprimismo el contenido.                        
};

alert(`Bienvenido ${usuarioStorage}`) || newUser(); */                              // Si la variable "usuarioStorage" tiene contenido, Entoces sale el cartel de saludo. Sino, llamamos a la funcion newUser, para crear el nuevo usuario y almacenarlo en el sescion storage.




/* let usx = document.getElementById("formNav");
let usuario;                                                                        // Creamos la variable usuario
let usuarioStorage = sessionStorage.getItem("usuario");                             // Traemos del sessionStorage el contenido de la variable

if(usuarioStorage){                                                                 // Si la variable tiene contenido.
    let mensaje = `Bienvenido ${usuarioStorage}`;                                   // Entoces sale el cartel de saludo
    alert(mensaje);
}else{
    usuario = prompt("Ingrese su nombre");                                          // Ingresamos por consola el nombre y se le asigna a la variable usuario.
    sessionStorage.setItem("usuario", usuario);                                     // Guardamos en sessionStorage el contenido de la variable usuario.
    alert("Bienvenido es tu primera Vez");                                          // Imprimismo el contenido.
} */
