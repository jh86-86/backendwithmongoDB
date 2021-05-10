const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const userSchema= new Schema({
    username:{
        type: String,   
        required: true,  
        unique: true,
        trim: true,
        minLength: 3
    },
    email:{
        type: String,   
        required: true,  
        unique: true,
    },
}, {
    timestamps: true,
});

const User= mongoose.model('user', userSchema);

module.exports =User;
