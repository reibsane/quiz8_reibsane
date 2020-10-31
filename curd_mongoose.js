const mongoose = require("mongoose")
const budgetModel = require("./models/budget_schema")

let url = 'mongodb://localhost:27017/chart_data';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the database")

    // //list all entries 
    // budgetModel.find({})
    // .then((data)=>{
    //     console.log(data)
    //     console.log("closing connection")
    //     mongoose.connection.close()
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    // })



    //fetch one document
    // budgetModel.find({title: "eat out"})
    // .then((data)=>{
    //     console.log(data)
    //     console.log("closing connection")
    //     mongoose.connection.close()
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    // })


    //find by id
    // budgetModel.findById("5f9c7652bdd8831caa1d8e32")
    // .then((data)=>{
    //     console.log(data)
    //     console.log("closing connection")
    //     mongoose.connection.close()
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    // })


    //insert
    // let newData = new budgetModel({title: "car", budget: 500, color: "#03d7fc"});
    //  budgetModel.insertMany(newData)
    // .then((data)=>{
    //     console.log(data)
    //     console.log("closing connection")
    //     mongoose.connection.close()
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    // })


//update one
//     let newData = {$set: {title: "My car", budget: 500, color: "#03d7fc"}};
//     budgetModel.updateOne({title: "car"}, newData)
//    .then((data)=>{
//        console.log(data)
//        console.log("closing connection")
//        mongoose.connection.close()
//    })
//    .catch((connectionError)=>{
//        console.log(connectionError)
//    })


//remove
budgetModel.remove({title: "My car"})
   .then((data)=>{
       console.log(data)
       console.log("closing connection")
       mongoose.connection.close()
   })
   .catch((connectionError)=>{
       console.log(connectionError)
   })



    
})
.catch((connectionError)=>{
    console.log(connectionError)
})