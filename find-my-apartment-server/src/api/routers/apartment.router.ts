import express from "express";
import {
    validateCreateApartment,
    validateGetApartmentDetails,
    validateGetApartments
} from "../validations/apartment.validation";
import {createApartment, getApartmentDetails, getApartments} from "../controllers/apartment.controller";
const router = express.Router();

router.post('/create', validateCreateApartment, createApartment)
router.get('/details', validateGetApartmentDetails, getApartmentDetails)
router.get('/list', validateGetApartments, getApartments)

module.exports = router;
