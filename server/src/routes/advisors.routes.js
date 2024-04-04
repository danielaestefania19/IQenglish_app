import { login, register, deleteAdvisors, updateAdvisors, registerAdmin, loginAdmin} from "../controllers/advisors.controller.js";
import { Router } from "express";

const router = Router()

router.post('/advisors/login', login)

router.post('/advisors/register', register)


router.put('/advisors', updateAdvisors)

router.delete('/advisors', deleteAdvisors)

router.post('/advisors/admin/login', loginAdmin)

router.post('/advisors/admin/register', registerAdmin)


export default router