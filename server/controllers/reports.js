const report = require('../models/reports.js')


module.exports = {
    push : async (req, res) => {
		try {
			console.log(req.body)
			const reportas = await report.create(req.body)
			res.send("succ");
		} catch (err) {
			res.send(err);
		}
	},
}