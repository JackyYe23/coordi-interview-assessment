import express from "express"
import { getAllContacts,getContactById,createContact,updateContact,deleteContact } from "../controllers/controller.js"
import { validateContact, validateUpdate } from "../middleware/validate.js"

const router = express.Router()

router.get("/",getAllContacts)
router.get("/:id",getContactById)
router.post("/",validateContact, createContact)
router.put("/:id",validateUpdate, updateContact)
router.delete("/:id",deleteContact)



export default router