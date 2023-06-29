const productos=[
    {nombre: "1", producto: "cupcakes", precio:3800},
    {nombre: "2", producto: "pasteles", precio: 3500},
    {nombre: "3", producto: "panes",precio: 600},
    {nombre: "4", producto: "facturas",precio: 1500},
    {nombre: "5", producto: "prepizzas",precio:500},
    {nombre: "6", producto: "chipa",precio: 800},
    {nombre: "7", producto:"desayunos", precio: 1700 },
]

let carrito=[]
alert("Bienvenidos a Pany Panaderia/Pateleria");
let sel= prompt ("estas interesado en ver nuestras delicias? si/no")
while(sel != "si" && sel != "no");

if(sel == "si")
{
    alert ("listado de Panypan");
    let todoslosProductos = productos.map((productos)=> `${productos.nombre} ${productos.producto}  \$ ${productos.precio}`);
    alert(todoslosProductos.join(" - "));
}
else if(sel == "no"){
    alert("Gracias por buscar Panypan!!");
}

while(sel != "no")

{
    let producto = prompt ("Encargar algun producto");
    let precio = 0;

    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7")
    {
       switch (producto) 
       {
        case "1":
            precio= 3.800;
            break;
        case "2":
            precio= 3.500;
            break;
        case "3":
            precio= 600;
            break;
        case "4":
            precio= 1.500;
            break;
        case "5":
            precio= 500;
            break;
        case "6":
            precio= 800;
            break; 
        case "7":
            precio= 1.700;
            break;
         default:
            break;             
       }
    let unidades = parseInt(prompt("¿Cuantas unidades desea?"));
    carrito.push({producto, unidades, precio})
    console.log(carrito);
    }
    else
    {
        alert ("No tenemos ese producto");
    }
    sel = prompt ("¿Desea continuar comprando?");
    while (sel == "no")
    {
        alert("Gracias por su compra");
        carrito.forEach((carritoFinal) => 
        {
             console.log(`producto: ${carritoFinal.producto}, undades: ${carritoFinal.unidades},
              total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log (`El total a pagar por la compra es: ${total}`);


alert("El total de su compra es:" + total);

