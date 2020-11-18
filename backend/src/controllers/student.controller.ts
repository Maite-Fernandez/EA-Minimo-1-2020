import { Request, Response } from "express";
import Student from "../models/student";


//Get a student by name
const getStudent= async(req:Request, res:Response) =>{
   await Student.find({"name":req.params.name}).then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
//Add new student
const postStudent = async(req: Request, res: Response) => {

     //Display request
     console.log(req.body);

    //Create a new student entity with the data found in request
    const student = new Student({
        "name": req.body.name,
        "address": req.body.address,
        "phones": req.body.phones
    });
    
    //Save new student in the database
    await student.save().then((data) => {
        console.log("New Student logged",req.body.name);
        return res.status(201).json(data);  
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Get all students
const getStudents= async(req:Request, res:Response) =>{
    await Student.find({}).then((data)=>{
 
         //Display data obatained
         console.log(data);
 
         let status: number = 200;
         if(data==null) status = 404;
         console.log(data);
         return res.status(status).json(data);
     }).catch((err) => {
         return res.status(500).json(err);
     })
 }

//Export the functions to use them from outside
export default { getStudent, postStudent, getStudents };