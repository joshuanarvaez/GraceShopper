const express = require('express');

const requireUser = (req, res,next) => {
    
    if(!req.user) {
        next({
            name:"MissingUserError",
            message: "You must be logged in to perform this action",
            status: 401
        });
    }

    next();
}

module.exports = requireUser;