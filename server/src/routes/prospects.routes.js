import { Router } from "express";
import { getProspects, getProspectById, createProspect, updateProspect, deleteProspect } from "../controllers/prospects.controller.js";

const router = Router()

router.get('/prospects', getProspects)

router.get('/prospects/:id', getProspectById)

router.post('/prospects', createProspect)

router.patch('/prospects/:id', updateProspect)

router.delete('/prospects/:id', deleteProspect)


export default router