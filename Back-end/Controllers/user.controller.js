import {alumnos} from "../modules/user.model.js";

export const test =() =>{
    console.log('llamando la función desde controlador')
}
alumnos.create({
    name: 'jesus',
    apepat: 'salazar',
    apemat: 'padilla',
    telNumber: 1234567,
    fechaNac: new Date('2000, 01, 14')
});






