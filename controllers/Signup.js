import signupDetailsModel from '../models/Signup.js';

export const AddSignup = async(req, res) => {
    const firstname = req.body.firstname.toString();
    const lastname = req.body.lastname.toString();
    // const email = req.bodyy.email.toString();
    const password = req.body.password.toString();

    const newSignup = new signupDetailsModel({
        firstname: firstname,
        lastname: lastname,
        // email: email,
        password: password
    });

    try {
        await newSignup.save();
        res.json(newSignup);

    } catch (error) {
        console.log("Not Saved ....");
    }
}

// export const GetUsers = async(req, res) => {
//     try {
//         const allLogins = await loginDetailsModel.find();
//         res.json(allLogins);
//     } catch (error) {
//         console.log("No Record Found...")
//     }
// }

// export const DeleteUser = async(req, res) => {
//     try {
//         const deleteRecord = await loginDetailsModel.findByIdAndDelete(req.params.id);
//         res.json(deleteRecord);
//         console.log(`Successfully Deleted : ${req.params.id}`);
//     } catch (error) {
//         console.log("Error!!!");
//     }
// }