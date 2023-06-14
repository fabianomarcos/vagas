const express = require('express');
import UsersController from '../../../controllers/usersController'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const usersRoute = express()
const usersController = new UsersController()

usersRoute.post("/", usersController.create)

usersRoute.get("/", usersController.listAllUsers)
usersRoute.get("/byName", usersController.getUsersByName)
usersRoute.get("/access", usersController.listCountUser)

usersRoute.delete("/", ensureAuthenticated, usersController.deleteUser)

usersRoute.put("/", ensureAuthenticated, usersController.updateUser)

export { usersRoute }