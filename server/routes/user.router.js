import express from 'express'
const userRouter = express.Router()
import {SignupController, LoginController, isAuth} from '../controllers/user.controller.js'
import tokenAuthentication from '../middleware/authentication.js'


userRouter.post('/signup',SignupController)
userRouter.post('/login',LoginController)
userRouter.get('/checkauth',tokenAuthentication, isAuth)
export default userRouter