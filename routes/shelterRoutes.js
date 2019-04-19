const express = require("express")
const shelterRouter = express.Router()
const Shelter = require('../models/shelterList.js')

//GET ONE
shelterRouter.get('/', (req, res, next) => {
    console.log(req.query)
    Shelter.find({'state': req.query.state}, (err, foundShelter) => {
        //should be findOne ... but it works so we going for it? 
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundShelter)
    })
})
//wait actually I dont think get one is doing anything

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