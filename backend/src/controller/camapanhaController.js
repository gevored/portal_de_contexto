const CampanhaController = require('../model/campanhaModel')

exports.Add = function (req,res){
    try {
        console.log(req.body)
        const campanha =  await CampanhaController.create()

       

        res.status(400).send({'message': 'Campanha cadastrada'})

    } catch (error) {
        
    }
}