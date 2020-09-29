import {Router} from 'express'
const routes = new Router()

import SessionController from './controllers/SessionController'

routes.post('/sessionuser',SessionController.store)

export default routes