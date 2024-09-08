import { MaxHeap } from "./monticulos/maxheap";

let ventas: MaxHeap = new MaxHeap(10)

ventas.insert("AAPL", "Apple INC.", 60, 500)
ventas.insert("AAPL", "Apple INC.", 50, 500)
ventas.insert("AAPL", "Apple INC.", 32.5, 500)
ventas.insert("AAPL", "Apple INC.", 8.6, 500)

console.log(ventas.checkMax())

ventas.print()
