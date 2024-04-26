import { Router } from "express";
import advisorExtractor from '../middleware/advisorExtractor.js'

const router = Router()

router.get('/blogs', advisorExtractor, )

router.get('/blogs/:id', advisorExtractor, )

router.post('/blogs', )

router.patch('/blogs/:id',  advisorExtractor, )

router.delete('/blogs/:id',  advisorExtractor, )


export default router