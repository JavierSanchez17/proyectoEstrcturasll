import { Acciones } from "../acciones";

export class MaxHeap{
    private heap: (Acciones|null)[];
    private n: number;
    constructor(size: number){
        this.heap = new Array(size+1);
        this.n = 0;
    }

    public checkMax(): Acciones | null{
        return this.heap[1];
    }
    public isEmpty(): boolean{ // Si esta vacio
        return this.n == 0;
    }

    public getQuiantity(): number{ //Obtener tamaño
        return this.n;
    }

    public insert(simbolo: string, nombre: string, precio: number, cantidad: number): void{ // Insertar
        let nuevaAccion: Acciones = new Acciones(simbolo, nombre, precio, cantidad)
        if (this.n == (this.heap.length-1))
           this.resize(2*this.heap.length);
        this.n++
        this.heap[this.n] = nuevaAccion
        this.swap(this.n)
    }

    private swap(i: number): void{ // Intercambio
        let father: number = Math.floor(i/2)
        while (i>1 && this.heap[father]!.getPrecio()<this.heap[i]!.getPrecio()){
            let temp: Acciones | null = this.heap[father]
            this.heap[father] = this.heap[i]
            this.heap[i] = temp
            i = Math.floor(father)
            father = Math.floor(i/2)
        }
    }

    private resize(newSize: number): void{
        let newHeap: (Acciones | null)[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap
    }

    public print(): void{
        for (let i=0; i<(this.heap.length); i++){
            console.log(this.heap[i])
        }
    }

    public getMax(): Acciones | null{
        let max: Acciones | null= this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = null;
        this.n--;
        this.sink(1);
        return max;
    }

    private sink(i: number): void{
        while (2*i<=this.n){
            let j:number = 2*i;
            if (j<this.n && this.heap[j]!.getPrecio()<this.heap[j+1]!.getPrecio())
                j++;
            if (this.heap[i]!.getPrecio()>=this.heap[j]!.getPrecio())
                break;

            let temp: Acciones | null = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            i = j;
        }
    }
}
