import formDetailsModel from '../models/Form.js';

export const GetForm = async(req, res) => {

    try {
        const formDetails = await formDetailsModel.find();
        res.json(formDetails);
    } catch (error) {
        console.log('not found.....');
    }
}

export const AddForm = async(req, res) => {

    const firstname = req.body.firstname.toString();
    const lastname = req.body.lastname.toString();
    const email = req.body.email.toString();
    const number = req.body.number.toString();
    const address1 = req.body.address1.toString();
    const address2 = req.body.address2.toString();
    const imag = req.body.imag.toString();
    const title = req.body.title.toString();
    const price = req.body.price.toString();


    const newForm = new formDetailsModel({
        firstname: firstname,
        lastname: lastname,
        email: email,
        number: number,
        address1: address1,
        address2: address2,
        imag: imag,
        title: title,
        price: price
    });

    try {
        await newForm.save();
        res.json(newForm);

    } catch (error) {
        console.log("Not Saved ....");
    }
}
export const deleteForm = async(req, res) => {

    try {
        console.log("del api reached");
        const del = await formDetailsModel.findByIdAndDelete(req.params.id)
        res.json(del);
    } catch {
        console.log("failed to delete");
    }
}

export const updateForm = async(req, res) => {
    try {
        const update = await formDetailsModel.findByIdAndUpdate(req.params.id, req.body)
        res.json(update)
    } catch (error) {
        console.log(`Successfully Updated Id = ${req.params.id}`)
    }
}