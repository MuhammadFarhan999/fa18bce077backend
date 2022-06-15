import mongoose from 'mongoose';

const signupDetailsStructure = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});


const signupDetailsModel = mongoose.model('singupDetailsModel', signupDetailsStructure);

export default signupDetailsModel;