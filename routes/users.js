const router= require('express').Router();
const User = require('../models/user.model');



router.route('/').get((req,res)=>{  //endpoint
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;

    const newUser = new User({
        username,
        email
    });

    newUser.save()
        .then(()=> res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/search', (req, res) => {
    const query = {username:req.body.username};
     User.find(query)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: "+ err ));
});


router.get('/searchname', (req, res) => {
    const query = req.query.username;
     User.find({username:{$regex: query}})
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: "+ err ));
});



module.exports =router;