import { Calculadora } from "./clase.mjs"
import { input } from "./utils.mjs";

const calc = new Calculadora()

while (true) {
    console.clear()

    console.log(`
        Elija una Operacion:
        1)Sumar
        2)Restar
        3)Multiplicar
        4)Dividir
        5)Potencia
        6)Salir
        `)

    const op = await input("opcion: ")

    if (op == 1) {
        console.log(`Elija los numeros:`)
        const num1 = Number(await input("num1 :"))
        const num2 = Number(await input("num2 :"))
        calc.suma(num1, num2)
        console.log(`El Resultado es: ${calc.result}`)
        await input("")
    }
    if (op == 2) {
        console.log(`Elija los numeros:`)
        const num1 = Number(await input("num1 :"))
        const num2 = Number(await input("num2 :"))
        calc.resta(num1, num2)
        console.log(`El Resultado es: ${calc.result}`)
        await input("")

    }
    if (op == 3) {
        console.log(`Elija los numeros:`)
        const num1 = Number(await input("num1 :"))
        const num2 = Number(await input("num2 :"))
        calc.multiplicar(num1, num2)
        console.log(`El Resultado es: ${calc.result}`)
        await input("")

    }
    if (op == 4) {
        console.log(`Elija los numeros:`)
        const num1 = Number(await input("num1 :"))
        const num2 = Number(await input("num2 :"))
        calc.dividir(num1, num2)
        console.log(`El Resultado es: ${calc.result}`)
        await input("")

    }
    if (op == 5) {
        console.log(`Elija los numeros:`)
        const num1 = Number(await input("num1 :"))
        const num2 = Number(await input("num2 :"))
        calc.potencia(num1, num2)
        console.log(`El Resultado es: ${calc.result}`)
        await input("")

    }
    if (op == 6) {
        break
    }

}