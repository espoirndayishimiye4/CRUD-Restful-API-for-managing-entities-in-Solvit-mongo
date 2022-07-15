const Staff = require('../models/staffs')

const getAllStaffs = async (req,res)=>{
    try {
        const Staffs = await Staff.find().exec()
        res.status(200).json(Staffs)
    } catch (error) {
        
    }
}

const createStaff = async (req, res)=>{
    const result = await Staff.create({
        id:Staff[Staff.length - 1] + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position
    });
     console.log(result);
    res.status(201).json({"message":"Staff Created Succesfully"});
}
const updateStaff = async (req, res)=>{
    const staff = await Staff.findOne({id:req.body.id}).exec()
    if(!staff){
        return res.status(400).json({'message': `Staff ID ${req.body.id} not found`});
    }
    if(req.body.firstName) staff.firstName = req.body.firstName;
    if(req.body.lastName) staff.lastName = req.body.lastName;
    if(req.body.position) staff.position = req.body.position;
    const result = await staff.save()
    res.status(200).json({"message":`staff with id ${req.body.id} Updated`})
}
const deleteStaff = async (req, res) =>{
    const oneStaff = await Staff.deleteOne({id:req.body.id}).exec()
    if(!oneStaff) return res.status(400).json({"message":`staff with id ${req.body.id} not found`})
    res.status(200).json({"message":`staff with id ${req.body.id} deleted`})
}

const getOneStaff = async (req, res) =>{
    const oneStaff = await Staff.findOne({id:req.params.id}).exec()
    if(!oneStaff) return res.status(400).json({"message":`staff with id ${req.params.id} not found`})
    res.status(200).json(oneStaff)
}

module.exports = {getAllStaffs, createStaff,updateStaff,deleteStaff, getOneStaff}