const express = require('express');
const notes = require('./db/db.json');
// const html = require('./public/notes.html');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(__dirname + '/public'));

// app.get('/assets/js/index.js', (req, res) => {
//     res.sendfile('./public/assets/js/index.js');
//     res.sendfile('./public/assets/css/styles.css');
// })

app.post('/api/notes', (req,res) =>{
    console.log(req.body);
    res.json(req.body);
})

app.get('/notes', (req, res) =>{
    res.sendfile('./public/notes.html');
})

app.get('/', (req, res) =>{
    res.sendfile('./public/index.html');
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
