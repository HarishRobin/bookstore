const express=require('express');
const router=express.Router();

const Book=require('../../models/Book');

router.get('/test',(req,res)=>res.send('Book Route testing..'));

router.get('/',(req,res)=>{
    Book.find().then(books => res.json(books)).catch(err => res.status(404).json({nobookfound:'No Books Found'}));
});

router.get('/:id',(req,res)=>{
    Book.findByID(req.params.id).then(book=>res.json(book)).catch(err=>res.status(404).json({nobookfound:'No Book Matching ID'}));
});

router.post('/',(req,res)=>{
    Book.create(req.body).then(book=>res.json({msg:'Book Added Successfully'})).catch(err=>res.status(400).json({error:'Unable to Add Book'}));
});

router.put('/:id',(req,res)=>{
    Book.findByIDAndUpdate(req.params.id,req.body).then(book=>res.json({msg:"Updated Book Successfully"})).catch(err=>res.status(400).json({error:"Unable to update the book"}));
});

router.delete('/:id',(req,res)=>{
    Book.findByIDAndRemove(req.params.id,req.body).then(book=>res.json({msg:'Book Entry deleted successfully..'})).catch(err=>res.status(404).json({error:'No such book to delete'}));
});

module.exports=router;