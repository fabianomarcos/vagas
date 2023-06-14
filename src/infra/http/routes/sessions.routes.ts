const express = require('express');
import SessionsController from '../../../controllers/sessionsController';

const sessionsRoute = express()
const sessionsController = new SessionsController()

sessionsRoute.post("/", sessionsController.create);

export { sessionsRoute }