// Dependencies
const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
app.post('api/notes',(req,res)=>{
    //do something
})
