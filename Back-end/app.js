import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import { test } from "./Controllers/user.controller.js";


dotenv.config(); 

const app = express(); 

app.use(cors()); 

mongoose.connect(process.env.url_db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
.then(() => {
    console.log('Conexión exitosa'); 
})
.catch((err) => {
    console.log('No funcionó:', err); 
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log('La API se está ejecutando en el puerto', PORT); 
});

test(); 

