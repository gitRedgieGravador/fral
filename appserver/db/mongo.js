const mongoose = require('mongoose');
const url = 'mongodb://localhost/fral';
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() =>{
  console.log('Database @: '+ url);
}).catch(() =>{
  console.log('failed connected to database');
});