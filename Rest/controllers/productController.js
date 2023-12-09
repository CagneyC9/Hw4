const product = require("../models/ItemModel");
const customer = require("../models/CustomerModel");

exports.getProduct = ( req, res, next ) => {
    product.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
}

exports.getProductDetails = ( req, res, next ) => {
    let id = req.params.id;
    // fetch all the records and find the idth one
    product.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.status(200).json( rows[0][0]);
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.addProduct = (req, res) => {
    console.log(req.body)
    product.add(req.body).then(() => {
        res.status(201);
    })
}
exports.updateProduct = (req, res) => {
    const { ItemName, ItemPrice, ItemID } = req.body;
    product.update({ ItemName, ItemPrice, ItemID })
        .then(() => {
            res.status(200).json({ message: 'Product updated successfully' });
        })
        .catch((error) => {
            console.error('Error updating product:', error);
            res.status(500).json({ error: 'Failed to update product. Please try again.' });
        });
};