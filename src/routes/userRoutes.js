import express from 'express';
import {yourfunciton1,yourfunciton2,yourfunciton3} from '../controller/yourContorllerFile.js.js'
const router = express.Router();

router.post("/yourPath",yourfunciton1)
router.post('/yourPath/yourPath',yourfunciton2)
router.get('/',yourfunciton3)
    

export default router;