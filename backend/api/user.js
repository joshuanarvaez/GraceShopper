const express = require('express')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const { createUser, getUser, getUserByUsername } = require('..db/user')



userRouter.post("/register", async (req, res, next) => {
    const { username, password } = req.body;
  
    try {
      const _user = await getUserByUsername(username);
  
      if (_user) {
        next({
          name: "UsernameError",
          message: "Username Taken",
        });
      }
  
      if (password.length <= 7) {
        next({
          name: "PasswordError",
          message: "Password must be at least 8 characters long",
        });
      }
  
      const user = await createUser({ username, password });
  
      const token = jwt.sign(
        {
          id: user.id,
          username,
        },
        `{process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "1w",
        }
      );
  
      return res.send({
        user,
        token,
      });
    } catch ({ name, message }) {
      console.error(message);
      next({ name, message });
    }
  });
  
  userRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      next({
        name: "MissingUsernamePassword",
        message: "Please enter username and password",
      });
    }
    if (password.length <= 7) {
      next({
        name: "PasswordError",
        message: "Password must be at least 8 characters long",
      });
    }
  
    try {
      const user = await getUser({ username, password });
  
      if (user) {
        const userData = {
          id: user.id,
          username: user.username,
        };
        const token = jwt.sign(userData, `{process.env.JWT_SECRET_KEY}`);
  
        return res.send({
          user,
          token,
        });
      } else {
        next({
          name: "IncorrectUsernamePassword",
          message: "Incorrect username or password",
        });
      }
    } catch (error) {
      console.log("CAUGHT AN ERROR");
      console.error(error);
      next(error);
    }
  });
  
  userRouter.get("/me", requireUser, async (req, res) => {
    return res.send({
      user: req.user,
    });
  });
  
  userRouter.get("/me/routines", requireUser, async (req, res) => {
    const routines = await getAllRoutinesByUser({username: req.user.username})
    return res.send({
      routines
    });
  });
  
  userRouter.get("/:username/routines", async (req, res, next) => {
    try {
      const username = req.params.username;
      const routine = await getPublicRoutinesByUser({ username });
      return res.send(routine);
    } catch ({ name, message }) {
      next({ name, message });
    }
  });
  
  module.exports = userRouter;