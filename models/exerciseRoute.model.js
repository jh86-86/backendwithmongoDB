const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const exerciseRouteSchema= new Schema({
    username:{type: String, required: true},
    startTime: {type: String, required: true},
    finishTime: {type: String, required: true},
    route: {type: Array, required: true}

   
}, {
    timestamps: true,
});

const ExerciseRoute= mongoose.model('exerciseRoute', exerciseRouteSchema);

module.exports =ExerciseRoute;
