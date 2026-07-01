const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username : {
        type: String,
        required : true,
        unqiue :[true, " username  already taken"],

    },
    password :{
        type: String,
        required : true,
        

    },

    email : {
        type: String, 
        required : true,
         unqiue :[true, "Account already exists with this email address"],


    },


    // profile_image:{
    //     type: String,
    //     default : "",

    // }
});

module.exports = mongoose.model("User" , userSchema);




