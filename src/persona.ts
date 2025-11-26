class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre; //puedo poner this.nombre! para que typescript confie en que el type está bien;
    }
}

const yo = new Persona('Diego', 20);

