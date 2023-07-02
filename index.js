require("dotenv").config();

const db = require("./db"); //criado por mim colocar "./"

const express = require("express"); //criado por módulo: colocar só o nome;

const app = express();

app.use(express.json()); //deserializa o json recebido e transforma 

app.delete("/clientes/:id", async (req, res) => {  
  await db.deleteCustomer(req.params.id);
  res.sendStatus(204);
})

app.patch("/clientes/:id", async (req, res) =>{
  await db.updateCustomer(req.params.id, req.body);  
  res.sendStatus(200); 
})

app.post("/clientes", async (req, res) => {  
  await db.insertCustomer(req.body);
  res.sendStatus(201);
})

app.get("/clientes/:id", async (req, res) => {
  const cliente = await db.selectCustomer(req.params.id)
  res.json(cliente);
})

app.get("/clientes", async (request, response) => {
  const clientes = await db.selectCustomers();
  response.json(clientes);
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