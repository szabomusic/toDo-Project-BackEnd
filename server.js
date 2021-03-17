const express = require('express');
const path = require('path')
const app = express();
const fs = require('fs');
let toDo = JSON.parse(fs.readFileSync('./data/data.json'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/', (req, res)=>{
    res.send(toDo)    
    })
    
    app.post('/', (req, res)=>{
        
       
     toDo = req.body;
     console.log(toDo);
     fs.writeFile('./data/data.json', JSON.stringify(toDo), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
       
     res.send({})
  })




// //Set a static folder
// app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port${PORT}`));