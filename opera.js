class Operacion {
    constructor(valorAnterior, valorActual) {
      this.valorActual = valorActual;
      this.valorAnterior = valorAnterior;
      this.Caluladora = new Caluladora();
      this.tipoOperacion = undefined;
      this.valActual = " ";
      this.valAnterior = " ";
      this.signo = {
        sumar: "+",
        restar: "-",
        dividir: "/",
        multipicar:"*"
      }
  }
  borrar() {
    this.valActual = this.valActual.toString().slice(0,-1);
    this.imprimirValores();
  }
  borrarTodo() {
    this.valActual = "";
    this.valAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores()
  
  }
  agregarNumero(numero) {
    if (numero === "." && this.valActual.includes(".")) return;
      this.valActual =  this.valActual.toString() + numero.toString();
      this.imprimirValores();
  }
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valAnterior = this.valActual || this.valAnterior;
    this.valActual = "";
    this.imprimirValores();
  }
  imprimirValores(){
      this.valorActual.textContent = this.valActual;
      this.valorAnterior.textContent = `${this.valAnterior} ${this.signo[this.tipoOperacion] || ""} `;
  }
  calcular() {
    const valAnterior = parseFloat(this.valAnterior);
    const valActual = parseFloat(this.valActual);

    if (isNaN(valActual)|| isNaN(valAnterior))return 
      
    this.valActual = this.Caluladora[this.tipoOperacion](valAnterior,valActual)
  }
}
  
  