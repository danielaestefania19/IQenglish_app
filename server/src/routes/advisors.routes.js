import { login, deleteAdvisors, getAllAdvisors, updateAdvisors, registerUser, loginAdmin} from "../controllers/advisors.controller.js";
import { Router } from "express";
import advisorExtractor from '../middleware/advisorExtractor.js'

const router = Router()

router.get('/advisors',advisorExtractor, getAllAdvisors)

router.post('/advisors/login', login)

router.post('/advisors/admin/login', loginAdmin)

router.post('/advisors/admin/register', advisorExtractor, registerUser)

router.patch('/advisors/:id',advisorExtractor, updateAdvisors)

router.delete('/advisors/:id',advisorExtractor, deleteAdvisors)




export default router