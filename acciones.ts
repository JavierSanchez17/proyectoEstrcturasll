export class Acciones{
    private simbolo: string; // Simbolo de la accion Ej.(Apple INC - AAPL)
    private nombre: string; // Nombre de la empresa
    private precioActual: number; // Precio actual de la acción
    private historialPrecios: number[]; // Historial de precios
    private cantidad: number; // Cantidad de acciones disponibles

    constructor(simbolo: string, nombre: string, precioInicial: number, cantidadInicial: number){
        this.simbolo = simbolo;
        this.nombre = nombre;
        this.precioActual = precioInicial; // Precio inicial de la acción sin modificar
        this.historialPrecios = [precioInicial]; // El precio inicial es el primero en la lista
        this.cantidad = cantidadInicial;
    }

    // Simbolo
    public getSimbolo(): string{
        return this.simbolo;
    }

    // Nombre
    public getNombre(): string{
        return this.nombre;
    }

    // Precio actual de la accion
    public getPrecio(): number{
        return this.precioActual;
    }

    // Editar precio y agregar al historial(Actualizar)
    public modPrecio(nuevoPrecio: number): void{
        this.precioActual = nuevoPrecio
        this.historialPrecios.push(this.precioActual)
    }

    // Obtener historial de precios
    public getHistorial(): number[]{
        return this.historialPrecios;
    }

    // obtener cantidad de acciones disponibles
    public getCantidad(): number{
        return this.cantidad
    }

    // Modificar la cantidad de acciones disponibles
    public modCantidad(nuevaCantidad: number): void{
        this.cantidad = nuevaCantidad
    }
}
