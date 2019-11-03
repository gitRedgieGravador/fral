const express     = require('express')
const userRoutes = require('./routes/UserRoute')

const app   = express();
const port  =  process.env.PORT || 3000

require('./db/mongo');
app.use(express.json())
app.use(userRoutes)

app.listen(port,() =>{
    console.log('server is up on ' + port);
})