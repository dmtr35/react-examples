import Router from "express"
const router = new Router()
import typeController from "../controller/typeController.js"
import checkRole from "../middleware/checkRoleMiddelware.js"



router.post('/', checkRole("ADMIN"), typeController.create)
router.get('/', typeController.getAll)


export default router


