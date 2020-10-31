const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/chart_data';

// 1- connect to database

mongoDBClient.connect(url, {useUnifiedTopology: true}, (operationaError, dbHandler)=>{
    // if (operationaError){
    //     console.log("Well, that didnt work")
    // } else {
    //     console.log("Connection still works!")


    //create operation
        // let data = {title: "work", budget: 35, color: "#a832a2"};
        
    //     dbHandler.db('chart_data').collection('budget_data').insertOne(data, (operr, opresult)=>{
    //         if (operr){
    //             console.log("unable to insert data into collection")
    //         } else {
    //             console.log("Inserted data successfully")
                
    //         }
    //     })


        //list operation
        // dbHandler.db('chart_data').collection('budget_data').find().toArray((operr, opresult)=>{
        //     if(operr){
        //         console.log(operr)
        //     } else {
        //         for (var i=0; i < opresult.length; i++){
        //             console.log(opresult[i])
        //         }
        //         // 3- close database
        //         console.log("Closing connection")
        //         dbHandler.close();
        //     }
        // });
        // dbHandler.db('chart_data').collection('budget_data').findOne({title: "work"}, (operr, opresult)=>{
        //     if (operr){
        //         console.log(operr)
        //     } else {
        //         console.log(opresult)
        //         console.log("Closing connection")
        //         dbHandler.close()
        //     }
        // })



        //update operation
        // let newData = {$set: {title: "fun", budget: 55, color: "#a832a2"}};
        // dbHandler.db('chart_data').collection('budget_data').updateOne({title: "work"}, newData, (operr, opresult)=>{
        //             if (operr){
        //                 console.log("unable to update data")
        //             } else {
        //                 console.log("updated data successfully")
                        
        //             }
        //             console.log("Closing connection")
        //             dbHandler.close()
        //         })



        //Delete Operation
        // let newData = {$set: {title: "fun", budget: 55, color: "#a832a2"}};
        // dbHandler.db('chart_data').collection('budget_data').deleteOne({title: "fun"}, (operr, opresult)=>{
        //             if (operr){
        //                 console.log("unable to delete data")
        //             } else {
        //                 console.log("deleted data successfully")
                        
        //             }
        //             console.log("Closing connection")
        //             dbHandler.close()
        //         })


     //Bulk Delete Operation
        let newData = {$set: {title: "fun", budget: 55, color: "#a832a2"}};
        dbHandler.db('chart_data').collection('budget_data').deleteMany({title: "fun"}, (operr, opresult)=>{
                    if (operr){
                        console.log("unable to delete data")
                    } else {
                        console.log("deleted data successfully")
                        
                    }
                    console.log("Closing connection")
                    dbHandler.close()
                })

    }
);



