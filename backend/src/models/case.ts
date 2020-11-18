import mongoose, { Schema, Document} from 'mongoose';

// Model of the object that is saved in the BBDD of MongoDB
const caseSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    dni: {
        type: String
    },
    phone: {
        type: String
    },
    fever:{
        type: String
    },
    cough: {
        type: String
    },
    breathing_difficulty:{
        type: String
    },
    general_discomfort:{
        type: String
    }
});



//Interface to treat the reply as a document
export interface ICase extends Document {
    name: string;
    date: string;
    dni: string;
    phone: string;
    fever: string;
    cough: string;
    breathing_difficulty: string;
    general_discomfort: string;
    
}

//Export the model to use it from outside
export default mongoose.model<ICase>('Case', caseSchema);