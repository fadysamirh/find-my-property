import express from "express";
import {createAmenity, deleteAmenity, editAmenity, getAmenities} from "../controllers/amenity.controller";
import {
    validateCreateAmenity,
    validateDeleteAmenity,
    validateEditAmenity,
    validateGetAmenities
} from "../validations/amenity.validation";

const router = express.Router();

router.post('/create', validateCreateAmenity, createAmenity);
router.put('/edit', validateEditAmenity, editAmenity);
router.delete('/delete', validateDeleteAmenity, deleteAmenity);
router.get('/list', validateGetAmenities, getAmenities);

module.exports = router;
