// require express
const express = require('express')
const { find, findOneAndDelete } = require('../models/Contacts')

// require model contact
const Contact = require('../models/Contacts')

//require controller
const controller = require('../controllers/contact.controllers')

//routes
const router = express.Router()

/*******************Routes*************************/
/**
 * @desc: test route
 * @path: 'http://localhost:7000/api/contact/test'
 * @method: GET
 * @data: no data
 * @acces: public
 */
router.get ('/test',(req,res) => {
res.send("Hello test")
}
)
/**
 * @desc: add contact
 * @path: 'http://localhost:7000/api/contact'
 * @method: POST
 * @data: req.body
 * @acces: public
 */
 router.post ('/', controller.addContact)
 /**
 * @desc: get all contact
 * @path: 'http://localhost:7000/api/contact'
 * @method: GET
 * @data: data
 * @acces: public
 */
 router.get ('/', controller.getContact)
/**                     
 * @desc: get one contact
 * @path: 'http://localhost:7000/api/contact/:id'
 * @method: GET                                  
 * @data: req.params
 * @acces: public
 */
router.get('/:id',controller.getOneContact)
/**
 * @desc: delete contact
 * @path: 'http://localhost:7000/api/contact/:_id'
 * @method: DELETE
 * @data: req.params
 * @acces: public
 */
 router.delete('/:_id', controller.deleteContact)
/**
 * @desc: update contact
 * @path: 'http://localhost:7000/api/contact/:_id'
 * @method: PUT
 * @data: req.params & req.body
 * @acces: public
 */
router.put('/:_id', controller.updateContact )

module.exports = router;