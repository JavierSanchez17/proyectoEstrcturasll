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
        this.emparejamiento()
    }

    public addVenta(simbolo: string, nombre: string, precioActual: number, cantidad: number){
        this.ventas.insert(simbolo, nombre, precioActual, cantidad)
        this.emparejamiento()
    }
    
    public emparejamiento(){
        while (!this.compras.isEmpty() && !this.ventas.isEmpty()){
            if (this.compras.checkMax() && this.ventas.checkMin() && this.compras.checkMax()!.getPrecio() >= this.ventas.checkMin()!.getPrecio()){
                console.log("Es mayor la compra que venta o son iguales")
                break;
            }
            else{
                console.log("La compra es menor a la venta o no son iguales")
                break;
            }
        }
    }
}