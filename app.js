
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const siteRoutes = require('./api/routes/sites')
const userRoutes = require('./api/routes/user')

mongoose.connect(
    "mongodb+srv://Trishala:"
    +process.env.MONGO_ATLAS_PW + 
    "@cluster0.zdrmd.mongodb.net/keep?retryWrites=true&w=majority",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","+");
    res.header("Access-Control-Allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method ==='OPTIONS'){
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// app.use('/products', productRoutes);
app.use('/app/sites', siteRoutes);
app.use('/app/user', userRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;
