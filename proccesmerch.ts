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
    }

    public addVenta(simbolo: string, nombre: string, precioActual: number, cantidad: number){
        this.ventas.insert(simbolo, nombre, precioActual, cantidad)
    }
}