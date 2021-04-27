const  express= require('express');
const cors= require('cors');
const mongoose= require('mongoose'); //helps use connect to mongoose database

require("dotenv").config(); 

const app = express();
const port= process.env.PORT || 5000;

app.use(cors()); //middlewear
app.use(express.json());


const uri= "mongodb://RolandCloud:RolandCloud@cluster0-shard-00-00.oneyu.mongodb.net:27017,cluster0-shard-00-01.oneyu.mongodb.net:27017,cluster0-shard-00-02.oneyu.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-431mr2-shard-0&authSource=admin&retryWrites=true&w=majority";
;//my database
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}
);

const connection= mongoose.connection;

connection.once('open', ()=>{
    console.log("Mongoose database connection successfully");
});

const exercisesRouter= require('./routes/exercises');
const usersRouter= require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});