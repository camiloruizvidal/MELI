
import { Router } from "express";
import ItemsController from "../Controllers/Items.controller";

const router = Router();

router.get('/:id', ItemsController.getItem)
router.get('', ItemsController.getQuery)

export default router;