import Router from "express"
const router = new Router()
import brandController from "../controller/brandController.js"



router.post('/', brandController.create)
router.get('/', brandController.getAll)


export default router


