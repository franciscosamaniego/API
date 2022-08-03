//imports
import express from 'express'; //si tenes la linea type podes usar esta forma:
// const express = require('express');
//config vars
const PORT = process.env.PORT || 3000;
//base de datos de mentira
const notes = [
  {
    id: 1,
    text: 'Lavar la ropa',
    done: false
  },
  {
    id: 2,
    text: Estudiar node',
    done: false
  },
  {
    id: 3,
    text: 'Hacer las compras',
    done: false
  }
];
const app = express();
app.use(express.static('public'));
app.use(express.json());
//en una API que devuelve JSON
//lo que se dice una API REST
//GET para leer datos
//POST para crear datos
//PUT para modificar
//DELETE para borrar

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
})
app.get('/notes/:id', (req, res) => {
  // res.send('Aca te pasa lad notas con id' + req.params.id);
  let id = +req.params.id;
  let result = notes.filter(note => note.id === id);
  res.json(result);
})
app.post('/notes', (req, res) => {
  // let newNote = {
  //   id: 100,
  //   text: 'Jugar a la play',
  //   done: false
  // };
  let {id, text, done} = req.body;
  let newNote = {id, text, done};
  notes.push(newNote);
  res.status(201).json(newNote);
})

app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
