import { Request, Response} from "express";
import  Case  from '../models/case';

//Get all cases
const getCases= async(req:Request, res:Response)=>{

    //Retrieve all cases from the database
    await Case.find({}).then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

// Get a case by name
const getCase= async(req:Request, res:Response) =>{
    
    //Find a case by name
    await Case.find({"name":req.params.name}).then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Add new case
const postCase = async (req: Request, res: Response)=>{

    //Display request
    console.log(req.body);

    //Create a new case entity with the data found in request
    const newcase = new Case({
        "name": req.body.name,
        "date": req.body.date,
        "dni": req.body.dni,
        "phone": req.body.phone,
        "fever": req.body.fever,
        "cough": req.body.cough,
        "breathing_difficulty": req.body.breathing_difficulty,
        "general_discomfort": req.body.general_discomfort
    });

    //Save new case in the database
    await newcase.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Edit a case
const editCase = async(req: Request, res: Response) =>{

    //Display request
    console.log(req.body);

    //Set variables for the data found in the request body
    let name = req.params.name;

    //Create a new student entity with the data found in request
    const editcase = new Case({
        "name": req.body.name,
        "date": req.body.date,
        "dni": req.body.dni,
        "phone": req.body.phone,
        "fever": req.body.fever,
        "cough": req.body.cough,
        "breathing_difficulty": req.body.breathing_difficulty,
        "general_discomfort": req.body.general_discomfort
    });
    //Look for the case in the database
    let casedata =await Case.findOne({name: editcase.name})

    //If the case is not in the database then save it
    if (!casedata) { 
        res.status(409).json('Case not found')
    }

    //Update a case
    await Case.updateOne({"name": name}, {$set: {
        
        date: editcase.date,
        dni: editcase.dni,
        phone: editcase.phone,
        fever: editcase.fever,
        cough: editcase.cough,
        breathing_difficulty: editcase.breathing_difficulty,
        general_discomfort: editcase.general_discomfort


    
    }}).then(result => { 
        if (result.nModified == 1) { 
            console.log("Case edited successfully"); 
            res.status(201).send({message: 'Case edited successfully'}); 
        } else { 
             
    } }).catch((err) => { 
        console.log("error ", err); 
        res.status(500).json(err); 
    }); 
}

//Export the functions to use them from outside
export default { getCases, getCase, postCase, editCase };