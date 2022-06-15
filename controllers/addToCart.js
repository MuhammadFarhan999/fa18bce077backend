import cartDetailsModel from '../models/addToCart.js';

export const AddCart = async(req, res) => {
    const title = req.body.title.toString();
    const price = req.body.price.toString();
    const imag = req.body.imag.toString();

    const newCart = new cartDetailsModel({
        title: title,
        price: price,
        imag: imag
    });

    try {
        await newCart.save();
        res.json(newCart);

    } catch (error) {
        console.log("Not Saved ....");
    }
}

// export const GetCart = async(req, res) => {
//     try {
//         const alldata = await cartDetailsModel.find();
//         res.json(alldata);
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