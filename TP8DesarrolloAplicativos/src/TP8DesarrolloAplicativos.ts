interface Estudiante{
    id: number,
    nombre: string,
    apellido: string,
    dni: string,
    notas: number[]
}

const estudiantes: Estudiante[] = [
    {
        id: 1,
        nombre: "Pepe",
        apellido: "Lopez",
        dni: "3423234",
        notas: [7,5,2,4,8]
    },
    {
        id: 2,
        nombre: "Lara",
        apellido: "Perez",
        dni: "3455532",
        notas: [3,2,1,2,1]
    },
    {
        id: 3,
        nombre: "Lolo",
        apellido: "Juarez",
        dni: "453264534",
        notas: [7,10,9,8,8]
    }
];

function calcularPromedio(estudiantes:Estudiante[]){
    estudiantes.forEach((estudiantes) => {
        let suma:number = 0;
        let promedio:number = 0;
        console.log(`El estudiante ${estudiantes.nombre} ${estudiantes.apellido}`)
        estudiantes.notas.forEach((n) =>{
            suma = suma + n;
        })
        promedio = suma / estudiantes.notas.length;
        console.log(`Tiene un promedio de ${promedio}`);
        if(promedio >= 7){
            console.log(`Tiene la materia promocionada.\n`)
        }else if( promedio >= 4){
            console.log(`Tiene la materia aprobada.\n`)
        }else{
            console.log(`Tiene la materia desaprobada.\n`)
        }
    });
};

calcularPromedio(estudiantes);