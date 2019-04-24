const express = require("express")
const shelterRouter = express.Router()
const Shelter = require('../models/shelterList.js')


//GET ALL 
shelterRouter.get('/', (req, res, next) => {
    SVGPathSegLinetoHorizontalRel.find((err, shelters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(shelters)
    })
})

shelterRouter.post("/", (req, res, next) => {
    const newShelter = new Shelter(req.body)
    newShelter.save((err, newShelterData) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newShelterData)
    })
})

module.exports = shelterRouter