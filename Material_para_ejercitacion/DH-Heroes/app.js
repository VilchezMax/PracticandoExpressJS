//npm init
//npm install express

//npm i --save-dev nodemon  PARA NO TENER QUE FRENAR Y ARRANCAR EN TERMINAL, CON ACTUALIZAR EN PAGINA ALCANZA

const express = require('express');
const app = express(); //con esto ya podemos suar sus metodos
const path = require('path'); //para usar metodo path.join

//.LISTEN para levantar el servidor.
app.listen(3000, () => {
    console.log("Hola, anduvo joya") 
});
//chequeando que anda, es convencion, no hace falta el callback. con el puerto alcanza. 80 para HTTP 443 HTTPS


app.use(express.static("public"));
//app.use
//extress.static : todo lo q esta en el parametro lo usa como estatico(siempre igual)


//RUTAS DE LA PAGINA:
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
   })

app.get('/babbage', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/babbage.html"))
   })
   
app.get('/berners-lee', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/berners-lee.html"))
   })

   app.get('/clarke', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/clarke.html"))
   })

app.get('/hamilton', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/hamilton.html"))
   })

app.get('/hopper', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/hopper.html"))
   })

app.get('/lovelace', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/lovelace.html"))
   })
   
app.get('/turing', (req,res) => {
    res.sendFile(path.join(__dirname, "./views/turing.html"))
   })
/*

res.sendStatus(404) manda mensaje error 404
res.send()  es inespecifico, manda lo que pongas
res.json({ "status" : "failed"} ) MANDA UN JSON, POR EJEMPLO PARA INTERACTUAR CON APIS ES CLAVE
res.send(404).json(blabla).  te muestra el json pero si vas a inspeccionar, tira el error que specificaste igual
res.download("path/al/archivo.")
res.render("file.html")

ROUTERS: Para no crear manualmente 1000 rutas con get 

    app.get("/users", (req,res) => {
        res.send("user List")
    })

    app.get("users/new", (req,res) => {
        res.send("user New Form")
    })

    app.listen(3000)
    
*/
