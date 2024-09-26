import { ProcessMerch } from "./proccesmerch"

let compra1: ProcessMerch = new ProcessMerch
let compra2: ProcessMerch = new ProcessMerch

compra1.addVenta("^IXIC", "NASDAQ Composite", 16900, 12)
compra2.addVenta("GC=F", "Gold Dec 24", 2615.20, 80)

compra1.addCompra("^IXIC", "NASDAQ Composite", 17000, 12)
compra2.addCompra("GC=F", "Gold Dec 24", 2200.20, 16)

compra1.addCompra("^IXIC", "NASDAQ Composite", 16500, 5)

console.log(compra1.mostrarHistorial())
console.log(compra2.mostrarHistorial())
