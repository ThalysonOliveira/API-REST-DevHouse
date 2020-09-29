import { Router } from 'express'
const routes = new Router()

import multer from 'multer'
import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

import SessionController from './controllers/SessionController'
import HouseController from './controllers/HouseController'
import DashboardController from './controllers/DashboardController'

routes.post('/sessionuser', SessionController.store)

routes.post('/createhouse', upload.single('thumbnail'), HouseController.store)
routes.get('/houses', HouseController.index)
routes.put('/house/:house_id', upload.single('thumbnail'), HouseController.update)
routes.delete('/house',HouseController.destroy)

routes.get('/dashboard', DashboardController.show)

export default routes