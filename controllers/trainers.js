const Trainer = require('../models/trainers')

const getAlltrainers = async (req,res)=>{
    try {
        try {
            const Trainers = await Trainer.find().exec()
            res.status(200).json(Trainers)
        } catch (error) {
            
        }
    } catch (error) {
        
    }
}

const createtrainer = async (req, res)=>{
    const result = await Trainer.create({
        id:Trainer[Trainer.length - 1] + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        course: req.body.course,
        salary: req.body.salary
    });
     console.log(result);
    res.status(201).json({"message":"Trainer Created Succesfully"});
}
const updatetrainer = async (req, res)=>{
    const trainer = await Trainer.findOne({id:req.body.id}).exec()
    if(!trainer){
        return res.status(400).json({'message': `Staff ID ${req.body.id} not found`});
    }
    if(req.body.firstName) trainer.firstName = req.body.firstName;
    if(req.body.lastName) trainer.lastName = req.body.lastName;
    if(req.body.course) trainer.course = req.body.course;
    const result = await trainer.save()
    res.status(200).json({"message":`trainer with id ${req.body.id} Updated`})
}
const deletetrainer = async (req, res) =>{
    const oneTrainer = await Trainer.deleteOne({id:req.body.id}).exec()
    if(!oneTrainer) return res.status(400).json({"message":`Trainer with id ${req.body.id} not found`})
    res.status(200).json({"message":`Trainer with id ${req.body.id} deleted`})
}

const getOnetrainer = async (req, res) =>{
    const oneTrainer = await Trainer.findOne({id:req.params.id}).exec()
    if(!oneTrainer) return res.status(400).json({"message":`Trainer with id ${req.params.id} not found`})
    res.status(200).json(oneTrainer)
}

module.exports = {getAlltrainers, createtrainer,updatetrainer,deletetrainer, getOnetrainer}