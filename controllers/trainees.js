const Trainee = require('../models/trainees')

const getAlltrainees = async (req,res)=>{
    try {
        const Trainees = await Trainee.find().exec()
        res.status(200).json(Trainees)
    } catch (error) {
        
    }
}

const createtrainee = async (req, res)=>{
    const result = await Trainee.create({
        id:Trainee[Trainee.length - 1] + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        course: req.body.course
    });
     console.log(result);
    res.status(201).json({"message":"Trainee Created Succesfully"});
}
const updatetrainee = async (req, res)=>{
    const trainee = await Trainee.findOne({id:req.body.id}).exec()
    if(!trainee){
        return res.status(400).json({'message': `trainer ID ${req.body.id} not found`});
    }
    if(req.body.firstName) trainee.firstName = req.body.firstName;
    if(req.body.lastName) trainee.lastName = req.body.lastName;
    if(req.body.course) trainee.course = req.body.course;
    const result = await trainee.save()
    res.status(200).json({"message":`trainee with id ${req.body.id} Updated`})
}
const deletetrainee = async (req, res) =>{
    const oneTrainee = await Trainee.deleteOne({id:req.body.id}).exec()
    if(!oneTrainee) return res.status(400).json({"message":`Trainee with id ${req.body.id} not found`})
    res.status(200).json({"message":`Trainee with id ${req.body.id} deleted`}) 
}

const getOnetrainee = async (req, res) =>{
    const oneTrainee = await Trainee.findOne({id:req.params.id}).exec()
    if(!oneTrainee) return res.status(400).json({"message":`Trainee with id ${req.params.id} not found`})
    res.status(200).json(oneTrainee)
}

module.exports = {getAlltrainees, createtrainee,updatetrainee,deletetrainee, getOnetrainee}