const mongoose = require("mongoose")
const budgetModel = require("./models/budget_schema")

let url = 'mongodb://localhost:27017/chart_data';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the database")
    budgetModel.find({})
    .then((data)=>{
        console.log(data)
    })
    .catch((connectionError)=>{
        console.log(mongoose.connectionError)
    })
})
.catch((connectionError)=>{
    console.log(connectionError)
})