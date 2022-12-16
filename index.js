const shopContenido = document.getElementById("shopContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContenido = document.getElementById("modalContenido");
const cantidadCarrito = document.getElementById("cantidadCarrito")

const productos = [
    {id: 1, nombre: `leche `, precio: 150, cantidad: 1, img:"https://media.istockphoto.com/id/960341526/es/foto/cart%C3%B3n-de-leche.jpg?s=612x612&w=0&k=20&c=nqKZiOKRE6mT1nA_32MAQR7eg4nRxhRHTGiXiiboYdw=" },
    {id: 2, nombre: `bizcochitos `, precio: 120, cantidad: 1, img:"https://www.todohumoonline.com.ar/wp-content/uploads/2020/11/7790957000668_02.jpg" },
    {id: 3, nombre: `pepsi `, precio: 300, cantidad: 1, img:"https://m.media-amazon.com/images/I/51-r9pOh08L._SL1500_.jpg" },
    {id: 4, nombre: `cerveza `, precio: 400, cantidad: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKPKqTJWh5kqyWi_iQlV3Pw8qmzGZ8GRoUw&usqp=CAU" },
    {id: 5, nombre: `harina `, precio: 250, cantidad: 1, img:"https://cordoba.parodisrl.com.ar/39004-thickbox_default/harina-blancaflor-leudante-1kg.jpg" }

];

let carrito = [];

productos.forEach((producto)=> {
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p class="precio">${producto.precio}$</p>
    `;

    shopContenido.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    contenido.append(comprar);

    comprar.addEventListener("click", ()=>{

      const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
     
        if(repeat === true){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad ++;
                }
            });
        } else {

        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,
        });

    }
        console.log(carrito);
        carritoCounter()

    });


});





const pintarCarrito = () => {
    modalContenido.innerHTML = "";
    modalContenido.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContenido.append(modalHeader);

    
    
    const modalButton = document.createElement("h1");
    modalButton.innerText= "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=> {
        modalContenido.style.display = "none";
    });

    modalHeader.append(modalButton);


    
    carrito.forEach((producto)=>{
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "modal-content"
    carritoContenido.innerHTML =`
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}$</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>total: ${producto.cantidad * producto.precio} </p>
    `;

    modalContenido.append(carritoContenido);

    console.log(carrito.length);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContenido.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);

    });
    
    const total = carrito.reduce((acc, unid)=> acc + unid.precio * unid.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = `total a pagar: ${total}$`;
    modalContenido.append(totalCompra);

};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {

    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter ((carritoId) =>{
        return carritoId !== foundId;
    });

    pintarCarrito();

}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}