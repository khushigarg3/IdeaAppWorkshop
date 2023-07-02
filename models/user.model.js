/**
 * This will hold the schema for the user
 * 
 * It also explains the diff fields of use and how it will be stored in the mongodb
 */

const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});