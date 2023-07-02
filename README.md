# Básico WebAPI usando Mysql e Postgres

Projeto de aprendizado para criação de WebApi usando o Mysql  postgres

## 🚀 Aprendizados

Foram criadas duas branchs "Master" (MySql) e "postegres"(postgres).

Os pacotes instalados (mysql2 e pg) funcionam um pouco diferentes.
O Mysql2 trabalhando semelhante a programação orientada a objeto (POO) enquanto que o pacote "pg" utiliza sintaxe SQL comum.

MySql2
```
Dar exemplos
```

Postgres


```
async function insertCustomer(customer){
  const client = await connect()
  const sql = "INSERT INTO clientes(nome, idade, uf) VALUES ($1, $2, $3)";
  const values = [customer.nome, customer.idade, customer.uf]
  await client.query(sql, values);  
}
```

E repita:

```
async function insertCustomer(customer){
  const client = await connect()
  const sql = "INSERT INTO clientes(nome, idade, uf) VALUES ($1, $2, $3)";
  const values = [customer.nome, customer.idade, customer.uf]
  await client.query(sql, values);  
}
```


## ✒️ Autor

* **William Lapa Santos Filho** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)