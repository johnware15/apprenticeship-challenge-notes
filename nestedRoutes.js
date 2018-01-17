"https://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router"

*** Possibly for users and items. Pratical use: blog sites ***

const express = require('express')
const app = express()

const userRouter = express.Router()
//Set mergeParams: true on router,
//to access params from parent Router
const itemRouter = express.Router({ mergeParams: true })

//Nest routers by attaching them as middleware:
userRouter.route('/')
    .get(function(res, req) {
      res.status(200)
        .send('hello users')
    })

userRouter.route('/:userId')
    .get(function(req, res) {
      res.status(200)
        .send('hello user ' + req.params.userId)
    })

itemRouter.route('/')
  .get(function(req, res) {
    res.status(200)
      .send('hello items from user ' + req.params.userId)
  })

itemRouter.route('/:itemId')
  .get(function(req, res) {
    res.status(200)
      .send('hello item ' + req.params.itemId + ' from user ' + req.params.userId)
  })

('/user', userRouter)

app.listen(3000)
