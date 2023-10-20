const User = require("../models/user.model.js").User;

async function registrarUsuario(req, res){
	const nombreUsuario = req.body.usrn;
	const pass = req.body.password;

	try {
		const newUser = await new User({
			username:nombreUsuario,
			password: pass
		}).save();

		res.json({
			obj: newUser
		})

	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	registrarUsuario
}