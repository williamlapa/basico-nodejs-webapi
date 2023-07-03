require("dotenv").config();

const db = require("./db"); //criado por mim colocar "./"

const express = require("express"); //criado por módulo: colocar só o nome;

const app = express();

app.use(express.json()); //deserializa o json recebido e transforma 

app.delete("/clientes/:id", async (request, response) => {
  const id = parseInt(request.params.id); //vem como texto, tem q converter
  await db.deleteCustomer(id);
  response.sendStatus(204);
})

app.patch("/clientes/:id", async (request, response) =>{
  const id = parseInt(request.params.id)
  const customer = request.body; //vem como texto, tem q converter  
  await db.updateCustomer(id, customer);
  response.sendStatus(200); 
})

app.post("/clientes", async (request, response) => {
  const customer = request.body;
  await db.insertCustomer(customer);
  response.sendStatus(201);  
})


app.get("/clientes/:id", async (request, response) => {
  const id = parseInt(request.params.id); //vem como texto, tem q converter
  const result = await db.selectCustomer(id);
  response.json(result);
})

app.get("/clientes", async (request, response) => {
  const results = await db.selectCustomers();
  response.json(results);
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