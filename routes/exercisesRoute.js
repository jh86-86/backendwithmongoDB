const router= require('express').Router();
const ExerciseRoute = require('../models/exerciseRoute.model');



router.route('/').get((req,res)=>{  //endpoint
    ExerciseRoute.find()
        .then(exerciseRoutes => res.json(exerciseRoutes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const startTime = req.body.startTime;
    const finishTime = req.body.finishTime;
    const route = req.body.route;

    const newExerciseRoute= new ExerciseRoute({
        username,
        startTime,
        finishTime,
        route
    });

    newExerciseRoute.save()
        .then(()=> res.json('Exercise route added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.get('/searchname', (req, res) => {
//     const query = req.query.username;
//      ExerciseRoute.find({username:{$regex: query}})
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json("Error: "+ err ));
// });
router.route('/searchname').get((req, res) => {
    const query = req.query.username;
     ExerciseRoute.find({username:{$regex: query}})
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: "+ err ));
});

module.exports =router;