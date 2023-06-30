require("dotenv").config();

const db = require("./db"); //criado por mim colocar "./"

const express = require("express"); //criado por módulo: colocar só o nome;

const app = express();

app.use(express.json()); //deserializa o json recebido e transforma 

app.delete("/clientes/:id", (request, response) => {
  const id = parseInt(request.params.id); //vem como texto, tem q converter
  db.deleteCustomer(id);
  response.sendStatus(204);
})

app.patch("/clientes/:id", (request, response) =>{
  const id = parseInt(request.params.id)
  const customer = request.body; //vem como texto, tem q converter  
  db.updateCustomer(id, customer);
  response.sendStatus(200); 
})

app.post("/clientes", (request, response) => {
  const customer = request.body; //vem como texto, tem q converter  
  db.insertCustomer(customer);
  response.sendStatus(201);  
})


app.get("/clientes/:id", (request, response) => {
  const id = parseInt(request.params.id); //vem como texto, tem q converter
  response.json(db.selectCustomer(id));
})

app.get("/clientes", (request, response) => {
  response.json(db.selectCustomers());
})

app.get("/", (request, response, next) => {
  // Aqui vc mostra o q vai aparecer na API
  response.json({
    message: 'It´s alive!'
  })
})

app.listen(process.env.PORT, ()=>{
  console.log("App is running!");
});