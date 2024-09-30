import * as readline from 'readline'
import { ProcessMerch } from './proccesmerch'


let mercado: ProcessMerch[] = []

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function principalMenu(){
    console.log("Menú de mercado")
    console.log("1. Ingresar nueva accion\n2. Salir")
    rl.question("Elige una opcion: ", (opcion: string) => {
        processprincipalMenu(opcion)
    })
}

function menu(newTransaccion: ProcessMerch){
    console.log("Menu de Acciones")
    console.log("1. Ingresar Venta\n2. Ingresar Compra\n3. Mostrar Historial\n4. Salir")
    rl.question("Ingrese la opcion deseada: ", (opcion: string) =>{
        processMenu(opcion, newTransaccion)
    })
}

function processprincipalMenu(opcion: string){
    switch (opcion){
        case "1":
            let newTransaccion: ProcessMerch = new ProcessMerch
            menu(newTransaccion)
            break;
        case "2":
            console.log("Saliendo del programa...")
            rl.close()
            break;
        default:
            console.log("Ingrese una opcion valida")
            principalMenu()
            break
    }
}

function ingreso(num: number, newTransaccion: ProcessMerch){
    rl.question("Ingrese simbolo de la accion: ", (simbolo: string) =>{
        rl.question("Ingrese nombre de la accion: ", (nombre: string) =>{
            rl.question("Ingrese precio de la accion: ", (precio: string) =>{
                rl.question("Ingrese cantidad de la accion: ", (cantidad: string) =>{  
                    if (num == 1){
                        newTransaccion.addVenta(simbolo, nombre, Number(precio), Number(cantidad))
                        console.log(nombre + " ingresado con exito")
                    }
                    else{
                        newTransaccion.addCompra(simbolo, nombre, Number(precio), Number(cantidad))
                        console.log(nombre + " ingresado con exito")
                    }
                    mercado.push(newTransaccion)
                    menu(newTransaccion)
                })
            })
        })
    })
}

function processMenu(opcion: string, newTransaccion: ProcessMerch){
    switch (opcion){
        case "1":
            ingreso(1, newTransaccion)
            break
        case "2":
            ingreso(2, newTransaccion)
            break
        case "3":
            newTransaccion.mostrarHistorial()
            menu(newTransaccion)
            break
        case "4":
            console.log("Saliendo del menu de acciones...")
            for (let i = 0; i < mercado.length; i++){
                console.log(mercado[i])
            }
            principalMenu()
            break
        default:
            console.log("Ingrese una opcion valida")
            menu(newTransaccion)
            break
    }
}

principalMenu()
