const { Int32 } = require("mongodb")
const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true 
    },

    budget: {
        type: Int32,
        required: true,
        unique: false 
    },

    color: {
        type: String,
        required: true,
        unique: true 
    }

}, {collection: 'budget_data'})