const router = require('express').Router();
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../users/userModel');


// Register User
// public

router.post('/register', (req, res, next) => {
    const user = req.body;
    const hash = bc.hashSync(user.password, 10);
    user.password = hash;
    User.add(user)
    .then( user => res.status(201).json(user))
    .catch(err => next(err))
})


// Login user
// public
router.post('/login', (req, res, next) => {
    const { username, password }= req.body;
    User.findByUser(username)
    .then( user => {
        if (user && bc.compareSync(password, user.password)){
            const token = signToken(user);
            res.status(200).json({token});
        } else {
            res.status(401).json({message: 'Invalid Credentials'});
        }
    })
    .catch(err => next(err))


})

function signToken(user) {
    
    const payload = {
        userId: user.id,
        username: user.username,
        department: user.department
    };

    const secure = 'this is very secure';
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secure, options)
}

module.exports = router;
