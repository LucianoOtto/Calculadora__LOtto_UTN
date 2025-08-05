export class Calculadora {
    constructor() {
        this.result = 0

    }

    suma(num1, num2) {
        this.result = num1 + num2
        return this.result
    }
    resta(num1, num2) {
        this.result = num1 - num2
        return this.result
    }
    multiplicar(num1, num2) {
        this.result = (num1 * num2)
        return this.result
    }
    dividir(num1, num2) {
        if(num2 === 0){
            return this.result = "No se puede dividir"
        }

        this.result = (num1 / num2)
        return this.result
    }
    potencia(num1, num2) {
        this.result = (num1 ** num2)
        return this.result
    }
}

