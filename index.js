const express = require('express')
const app = express()
const connection = require('./models/database')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(3001, ()=>{})

app.get('/', (req, res)=>{
  res.json({msg: 'Bem vindo a API V1'})
})

app.get('/users', (req, res)=>{
  connection.query('select * from users', function(error,results,fields){
    if(error){
      console.log(error)
    }else{
     res.json({results})
    }
  })
})

app.post('/users', (req, res)=>{
  const nome = req.body.nome
  const email = req.body.email
  const celular = req.body.celular

  connection.query(`insert into users(nome,email,celular) values('${nome}','${email}','${celular}')`, function(error,results,fields){
    if(error){
      console.log(error)
    }else{
      console.log(results)
      res.status(200).json({msg: 'Usuário criado com sucesso'})
    }
  })
})