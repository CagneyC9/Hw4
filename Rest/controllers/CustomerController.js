const customer  = require("../models/CustomerModel");
// const Book = require("../models/book");


exports.getCustomer = ( req, res, next ) => {
    customer.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
}

exports.getCustomerDetails = ( req, res, next ) => {
    let id = req.params.id;
    // fetch all the records and find the idth one
    customer.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.status(200).json( rows[0][0]);
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.addCustomer = (req, res) => {
    customer.add(req.body).then(() => {
        res.status(201);
    })
}
exports.updateCustomer = (req, res) => {
    customer.add(req.body).then(() => {
        res.status(200);
    })
}
exports.updateCustomer = (req, res) => {
    console.log(customer.update(req.body))
    customer.update(req.body).then(() => {
        res.status(200);
    })

}
exports.deleteCustomer = (req, res) => {
    console.log(customer.delete(req.body.id))
    customer.delete(req.body).then(() => {
        res.status(204);
    })
}



