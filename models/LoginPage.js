import mongoose from 'mongoose';

const loginDetailsStructure = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String
});


const loginDetailsModel = mongoose.model('loginDetailsModel', loginDetailsStructure);

export default loginDetailsModel;