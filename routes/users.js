const express = require("express");
const router = express.Router();
const User = require('../models/User')



router.post('/', async (req, res) => {

    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
        return res.status(200).json({
            success: false,
            data: null,
            message: "Este usuario ya está registrado",
        });
    }
    //guardar
    const user = new User(req.body);
    try {
        const userSaved = await user.save();
        return res.status(200).json({
            success: true,
            data: userSaved,
            message: "Usuario registrado",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: error,
        });
    }
})


router.put('/:idUser', async (req, res) => {

    const userExist = await User.findById(req.params.idUser);

    console.log(userExist)
    console.log(req.params.idUser)

    if (!userExist) {
        return res.status(200).json({
            success: false,
            data: null,
            message: "Este usuario no existe",
        });
    }
    //actualizar

    try {
        const userUpdate = await User.updateOne(
            { _id: req.params.idUser },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    role: req.body.role
                }
            }
        );
        return res.status(200).json({
            success: true,
            data: userUpdate,
            message: "Usuario actualizado",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: error,
        });
    }


})



module.exports = router;