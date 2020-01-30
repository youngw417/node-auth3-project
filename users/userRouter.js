const router = require('express').Router();
const User = require('./userModel');

// get all users

router.get('/', (req, res, next) => {

    User.find().
    then( users => res.status(200).json(users))
    .catch( err => next(err))
})

module.exports = router;