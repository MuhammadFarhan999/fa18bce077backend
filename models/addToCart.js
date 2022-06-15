import mongoose from 'mongoose';

const cartDetailsStructure = mongoose.Schema({
    title: String,
    price: String,
    imag: String
});


const cartDetailsModel = mongoose.model('cartDetailsModel', cartDetailsStructure);

export default cartDetailsModel;