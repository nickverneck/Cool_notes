const fs = require('fs');
const path = require('path');
const uniqID= require('uniqid');
const dbPath = path.join(__dirname, '../db/db.json');
// let's read the db.json and transform into JSON object
// then we push the post data into our JSON file
// and  write the file with the new data.
saveDb = (req) =>{
  fs.readFile(dbPath,'utf8',(err,data)=> {
    if (err){
      console.log(err);
  }
  else{ 
    var dbData = JSON.parse(data);
    req.body.id = uniqID();
    dbData.push(req.body);
    
    fs.writeFile(dbPath,JSON.stringify(dbData),(erro)=> {
    if (erro)
    {
      console.log(erro)
    } 
  })
   
  }
  });
}
deleteitem = (req)=>{
  fs.readFile(dbPath,'utf8',(err,data)=> {
    if (err){
      console.log(err);
  }
  else{ 
   
    var dbData = JSON.parse(data);
  
   for (let i = 0; i < dbData.length; i++ ){
     
     if (dbData[i].id === req.params.id)
     {
       dbData.splice(i,1);
       
     }

   }
    
    fs.writeFile(dbPath,JSON.stringify(dbData),(erro)=> {
    if (erro)
    {
      console.log(erro)
    } 
  })
   
  }
  });
}


module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.sendFile(dbPath));
  
  app.post('/api/notes', (req, res) => {
   saveDb(req)
 })

 app.delete('/api/notes/:id',(req,res)=>{
  deleteitem(req);
 })

};
