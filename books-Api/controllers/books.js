const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');
 
 
//index route
router.post('/', async (req, res) => {
   try {
       const createdBook = await Books.create(req.body);
       res.status(200).json(createdBook);
   } catch (error) {
       res.status(400).json(error);
   }
});
router.get('/', async (req, res) => {
   try {
       const gitbooks = await Books.find({});
       res.status(200).json(gitbooks);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
// //delete route
// router.delete('/:id', async (req, res) => {
//    try {
//        const deletedHoliday = await Holiday.findByIdAndRemove(req.params.id);
//        res.status(200).json(deletedHoliday);
//    } catch (error) {
//        res.status(400).json(error);
//    }
// });
 
 
// //edit route
// router.put('/:id', async (req, res) => {
//    try {
//        const updatedHoliday = await Holiday.findByIdAndUpdate(
//            req.params.id,
//            req.body,
//            { new: true }
//        );
//        res.status(200).json(updatedHoliday);
//    } catch (error) {
//        res.status(400).json(error);
//    }
// });
 
 
module.exports = router;
