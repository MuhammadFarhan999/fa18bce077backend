import mongoose from 'mongoose';

const formDetailsStructure = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    number: String,
    address1: String,
    address2: String,
    postalCode: String,
    imag: String,
    title: String,
    price: String
});


const formDetailsModel = mongoose.model('formDetailsModel', formDetailsStructure);

export default formDetailsModel;