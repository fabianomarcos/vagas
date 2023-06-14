const express = require('express');
import UsersController from '../../../controllers/usersController'

const userByNameRoute = express()
const usersController = new UsersController()

userByNameRoute.get("/", usersController.getUserByName)

export { userByNameRoute }