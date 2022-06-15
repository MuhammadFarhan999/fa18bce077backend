import loginDetailsModel from '../models/LoginPage.js';

export const AddUser = async(req, res) => {
    const userName = req.body.username.toString();
    const password = req.body.password.toString();

    const newLogin = new loginDetailsModel({
        userName: userName,
        password: password
    });

    try {
        await newLogin.save();
        res.json(newLogin);

    } catch (error) {
        console.log("Not Saved ....");
    }
}

export const GetUsers = async(req, res) => {
    try {
        const allLogins = await loginDetailsModel.find();
        res.json(allLogins);
    } catch (error) {
        console.log("No Record Found...")
    }
}

export const DeleteUser = async(req, res) => {
    try {
        const deleteRecord = await loginDetailsModel.findByIdAndDelete(req.params.id);
        res.json(deleteRecord);
        console.log(`Successfully Deleted : ${req.params.id}`);
    } catch (error) {
        console.log("Error!!!");
    }
}