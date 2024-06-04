import { app } from "./app.js";


console.log("Aplikacija paleista");


// import express, {Application, Request, Response} from 'express';

// console.log("SERVERIS PALEISTAS");

// const app:Application=express();

// app.use('/skaiciuoti', SkaiciuokleController.apskaiciuoti);

// app.use( ('/antras', (req:Request, res:Response, next:any)=>{
//     // res.send("express.js veikia");
//     console.log("Uzsikrove antras middleware");
//     res.send("Antras URL")
//     });

// app.use( (req:Request, res:Response, next:any)=>{
//     // res.send("express.js veikia");
//     console.log("Uzsikrove antras middleware");
//     next();
//     });

// app.use( (req:Request, res:Response, next:any)=>{
//     // res.send("express.js veikia");
//     console.log("Uzsikrove trecias middleware");
//     res.send("Pasiekem gala");
//     });



app.listen(3999, ()=>{
    console.log("Express serveris paleistas, ant uosto 3999");
    
})