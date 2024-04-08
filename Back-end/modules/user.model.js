import { Schema, model } from "mongoose";

const alumnosSchema = new Schema({
    name: {
        type: String
    },
    estado: {
        type: String
    }
});

export const AlumnosModel = model('Alumnos', alumnosSchema); 
