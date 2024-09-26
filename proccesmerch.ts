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
        if (this.ventas.isEmpty())
            console.log("No hay ordenes de venta disponibles, la compra esta pendiente")
        else
            this.emparejamiento()
    }

    public addVenta(simbolo: string, nombre: string, precioActual: number, cantidad: number){
        this.ventas.insert(simbolo, nombre, precioActual, cantidad)
        if (this.compras.isEmpty())
            console.log("No hay ordenes de compra disponibles, la venta esta pendiente")
        else
            this.emparejamiento()
    }
    
    public emparejamiento(){
        while (!this.compras.isEmpty() && !this.ventas.isEmpty()){
            let cantidadInterambiada: number = 0
            if (this.compras.checkMax() && this.ventas.checkMin() && this.compras.checkMax()!.getPrecio() >= this.ventas.checkMin()!.getPrecio()){
                if (this.compras.checkMax()!.getCantidad() < this.ventas.checkMin()!.getCantidad())
                    cantidadInterambiada = this.compras.checkMax()!.getCantidad()
                else
                    cantidadInterambiada = this.ventas.checkMin()!.getCantidad()
                

                this.compras.checkMax()?.modCantidad(this.compras.checkMax()!.getCantidad() - cantidadInterambiada)
                this.ventas.checkMin()?.modCantidad(this.ventas.checkMin()!.getCantidad() - cantidadInterambiada)
                
                this.historialTransacciones.push("Transaccion " + String(this.historialTransacciones.length+1) + "\nSimbolo: " + this.compras.checkMax()?.getSimbolo() + " - Nombre: " + this.compras.checkMax()?.getNombre() + " - Cantidad: " + String(cantidadInterambiada) + " - Precio: " + String(this.compras.checkMax()?.getPrecio()))

                if (this.compras.checkMax()?.getCantidad() == 0)
                    console.log(this.compras.checkMax()?.getNombre() + " eliminada de compras")
                    this.compras.getMax()
                if (this.ventas.checkMin()?.getCantidad() == 0)
                    console.log(this.ventas.checkMin()?.getNombre() + " eliminada de ventas")
                    this.ventas.getMin()
            }
            else{
                console.log("El precio de compra: " + this.compras.checkMax()?.getPrecio() + " de " + this.compras.checkMax()?.getNombre() + " es menor al precio en venta: " + this.ventas.checkMin()?.getPrecio())
                break;
            }
        }
    }

    public mostrarHistorial(){
        if (this.historialTransacciones.length == 0){
            console.log("No se han realizado transacciones")
        }
        else{
            for (let i: number = 0; i<this.compras.getQuiantity(); i++){
                if (this.historialTransacciones[i] != undefined){
                    console.log(this.historialTransacciones[i])
                }
            }
        }
    }
}