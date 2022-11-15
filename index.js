const productos = [
    {nombre: `leche `, precio: 150},
    {nombre: `bizcochitos `, precio: 120 },
    {nombre: `pepsi `, precio: 300 },
    {nombre: `cerveza `, precio: 400 },
    {nombre: `levadura `, precio: 250}

];

let carrito = []

let seleccion = prompt ("Buenas, quiere realizar una compra? si o no")

while(seleccion != `si` && seleccion != `no`) {
    alert(`Porfavor, ingrese si o no`)
    seleccion = prompt ("Buenas, quiere realizar una compra? si o no")
}

if(seleccion==`si`) {
    alert(`te mostraremos la lista de productos disponibles`);
    
    let listaProductos = productos.map((producto) => producto.nombre + "" + producto.precio + `$`);

    alert(listaProductos.join(`, `));

    }else if (seleccion == `no` ) {
        alert(`Hasta pronto!`);
    }

while(seleccion != `no`) {
    let producto = prompt (`agrega el producto que desees llevar a tu carrito`);
    let precio = 0;

    if(producto == `leche` || producto == `bizcochitos` || producto == `pepsi` || producto == `cerveza` || producto == `levadura`) {
        switch(producto) {
            case `leche`:
            precio = 150
            break;  
            
            case `bizcochitos`:
            precio = 120
            break; 

            case `pepsi`:
            precio = 300
            break; 

            case `cerveza`:
            precio = 400
            break; 

            case `levadura`:
            precio = 250
            break;
        }
    let unidades = parseInt(prompt(`Cuantas unidades quiere llevar?`));

    carrito.push({producto, unidades, precio});
    console.log(carrito);
    } else {
        alert(`No poseemos ese producto. Por favor eliga un producto disponible`)
    }


    seleccion = prompt(`desea continuar comprando?`)

    while(seleccion == `no`){
        alert(`Gracias por su compra! A continuacion veras tu carrito de compras.`);
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, valor total: ${carritoFinal.unidades * carritoFinal.precio}`)
        });
        break;
    }
    
}

const total = carrito.reduce ((acc,el) => acc + el.precio * el.unidades, 0);
alert(`el total de tu compra es $${total}, que disfrutes tu compra!`);

