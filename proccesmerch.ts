import { Acciones } from "./acciones"
import { MaxHeap } from "./monticulos/maxheap"
import { MinHeap } from "./monticulos/minheap"

export class ProcessMerch{
    private compras: MaxHeap
    private ventas: MinHeap
    private historialTransacciones: string[] = []

    constructor(){
        this.compras = new MaxHeap(10)
        this.ventas = new MinHeap(10)
    }

    public addCompra(simbolo: string, nombre: string, precioActual: number, cantidad: number){
        this.compras.insert(simbolo, nombre, precioActual, cantidad)
        console.log("Compra " + nombre + " ingresada correctamente")
        if (this.ventas.isEmpty())
            console.log("No hay ordenes de venta disponibles, la compra esta pendiente")
        else
            this.emparejamiento()
    }

    public addVenta(simbolo: string, nombre: string, precioActual: number, cantidad: number){
        this.ventas.insert(simbolo, nombre, precioActual, cantidad)
        console.log("Venta " + nombre + " ingresada correctamente")
        if (this.compras.isEmpty())
            console.log("No hay ordenes de compra disponibles, la venta esta pendiente")
        else
            this.emparejamiento()
    }
    
    public emparejamiento(){
        while (!this.compras.isEmpty() && !this.ventas.isEmpty()){
            let cantidadInterambiada: number = 0
            let compraMayor: Acciones | null = this.compras.checkMax()
            let ventaMenor: Acciones | null = this.ventas.checkMin()
            if (compraMayor && ventaMenor && compraMayor!.getPrecio() >= ventaMenor!.getPrecio()){
                if (compraMayor!.getCantidad() < ventaMenor!.getCantidad())
                    cantidadInterambiada = compraMayor!.getCantidad()
                else
                    cantidadInterambiada = ventaMenor!.getCantidad()
                

                compraMayor?.modCantidad(compraMayor!.getCantidad() - cantidadInterambiada)
                ventaMenor?.modCantidad(ventaMenor!.getCantidad() - cantidadInterambiada)
                
                this.historialTransacciones.push("Transaccion " + String(this.historialTransacciones.length+1) + "\nSimbolo: " + compraMayor?.getSimbolo() + " - Nombre: " + compraMayor?.getNombre() + " - Cantidad: " + String(cantidadInterambiada) + " - Precio: " + String(compraMayor?.getPrecio()))

                if (compraMayor?.getCantidad() == 0)
                    console.log(compraMayor?.getNombre() + " ya no tiene compras disponibles")
                    console.log(compraMayor?.getNombre() + " eliminada de compras")
                    this.compras.getMax()
                if (ventaMenor?.getCantidad() == 0)
                    console.log(ventaMenor?.getNombre() + " ya no tiene ventas disponibles")
                    console.log(ventaMenor?.getNombre() + " eliminada de ventas")
                    this.ventas.getMin()
            }
            else{
                console.log("No es posible realizar la transaccion, motivo:")
                console.log("El precio de compra: " + compraMayor?.getPrecio() + " de " + compraMayor?.getNombre() + " es menor al precio en venta: " + ventaMenor?.getPrecio())
                break;
            }
        }
    }

    public mostrarHistorial() {
        if (this.historialTransacciones.length === 0) {
            console.log("HISTORIAL DE TRANSACCIONES\nNo se han realizado transacciones");
        } else {
            console.log("HISTORIAL DE TRANSACCIONES");
            for (let i = 0; i < this.historialTransacciones.length; i++) {
                console.log(this.historialTransacciones[i]);
            }
        }
    }
}