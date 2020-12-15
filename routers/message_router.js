const express = require('express');
const { Message } = require('../models/base_model');

const router = express.Router();

router.post('/', async (req, res, next) => {
   try {
        const data = {
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        };

        let new_message = await Message.insert(data);
        res.status(201).json(new_message)
   } catch (e) {
       return e
   }
});

router.get('/', async (req, res, next) => {
   try {
       const all_messages = await Message.get_all();
       res.status(200).json(all_messages);
   } catch (e) {
       return e;
   }
});

module.exports = router;