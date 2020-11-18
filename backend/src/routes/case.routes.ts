import {Router} from "express"; 
import caseController from '../controllers/case.controller'

//Router to manage the API endpoints
const router = Router();

// HTTP Requests (route, controller function)
router.get('/all', caseController.getCases);
router.get('/get/:name',caseController.getCase);
router.post('/add', caseController.postCase);
router.post('/edit/:name', caseController.editCase);


//Export router to use the routes in app.ts
export default router;