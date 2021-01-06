const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');

//This enables the server to respond to preflight requests
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
 //where to find the build folder  
app.use(express.static(path.join(__dirname, '../build')));
//where to find the static folder
app.use('/static', express.static(path.join(__dirname, 'build//static')));
//app.use is executed every time the server is used
app.use(bodyParser.urlencoded({ extended: false }))

//bodyParser parses the incoming requests in the middleware
app.use(bodyParser.json())

//connects server to the database
const strConnection ='mongodb+srv://Admin:Admin@cluster0.pc43g.mongodb.net/myBooks?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

//creates a schema
const Schema = mongoose.Schema;

//defines the schema
const bookSchema = new Schema({
    title: String,
    author: String,
    year: String,
    rating: String,
    genre: String


})
//creates a model
const bookModel = mongoose.model('book', bookSchema);


//Displays the book details
app.get('/api/books', (req, res)=>{

    //finds all documents and executes the json function
    bookModel.find((err,data)=>{
        res.json(data);
    })

})
 
app.post('/api/books', (req, res)=>{
    console.log(req.body);

    bookModel.create({
        title:req.body.title,
        author:req.body.author,
        year:req.body.year,
        rating:req.body.rating,
        genre:req.body.genre,
        
    })
})

//Deletes book by id
app.delete('/api/books/:id', function (req, res) {
    console.log(req.params.id);
    //Asynchronous call to the database
    bookModel.deleteOne({ _id: req.params.id },
    function (err, data) {
    if (err)
    res.send(err);
    res.send(data);
    })
    })
    
//gets the book by id
app.get('/api/books/:id', (req, res)=>{

    console.log(req.params.id);
    
//searches the database and returns the data by id
    bookModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

app.put('/api/books/:id', (req,res)=>{
    console.log("Update book: "+ req.params.id);
    console.log(req.body);

    //asynchronous call to database to find book by id and update it
    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})
app.patch('/api/books/:id', (req,res)=>{

    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})
//sends up the local directory
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+ '/../build/index.html'));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})