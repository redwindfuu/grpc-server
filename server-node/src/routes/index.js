import { Router } from 'express';
import publicRouter from './public';
const router = Router();


router.use("/public", publicRouter);


export default router
