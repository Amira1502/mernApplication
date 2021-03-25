// add contact
const addContact = async (req,res) => {
    try{
       const {name, email, phone} = req.body
       //mail and name required
       if(!name || !email)
       {
         res.status(400).send({msg: `name and email are required...`})
       }
       //email is unique
       const contact = Contact.findOne({email})
       if (!contact)
       {
       res.status(400).send({msg: `contact is already exist...`})
       return
       }

       const newContact = new Contact({
           name,
           email,
           phone
       })
   await newContact.save()
     res.status(200).send({msg: `Contact added swith success...`,newContact})
    }
    catch(error){
       res.status(400).send({msg: `Contact not added...`,error})
   }
 
   }
   
   //get contact
const getContact = async (req,res) => {
    try{
       const listContact = await Contact.find()
     res.status(200).send({msg: `This is a list of Contact ...`,listContact})
    }
    catch(error){
       res.status(400).send({msg: `Can not get all Contact...`,error})
   }
  }
   //get contact by id 
const getOneContact = async(req,res) =>{
  try
  {
      const contactTofind = await Contact.findOne({_id: req.params.id })
      res.status(200).send({msg: `This is a Contact ...`,contactTofind })
  }
  catch(error)
  {
      res.status(400).send({msg: `Can not get contact...`,error})
  }
  }
 // delete contact
 const deleteContact = async(req,res) =>{
  try
  {
  const {_id} = req.params
  const contactToDelete = await Contact.findOneAndDelete({_id})
  if(!contactToDelete)
  {
    res.status(400).send({msg: `Contact is alreadey deleted..`})
    return
 }
  res.status(200).send({msg: `Contact is deleted ...`,contactToDelete })
 }
 catch (error)
 {
     res.status(400).send({msg: `Can not delete contact...`,error})

 }
}   

// update contact
const updateContact = async(req,res) => {
  try 
  {
      const { _id } = req.params
      const result = await Contact.updateOne({_id},{ $set: { ...req.body} })
      
      if(!result.nModified)
      {
          res.status(400).send({msg: `contact is already updated...`})
      }
      res.status(200).send({msg: `Contact is updated ...`})
  }
  catch(error)
  {
      res.status(400).send({msg: `can not update contact...`,error})
  }

}
// exports modules
   module.exports = {addContact, getContact, getOneContact, deleteContact, updateContact}