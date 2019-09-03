const express = require('express');
const db = require('../data/db.js');
const router = express.Router();

//GET array of all post objects
router.get('/', (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json({
            error: 'The posts information could not be retrieved.'
        }))
    })

//GET post object with specified ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
        .then(postID => { 
            if(postID) {
                res.status(200).json(postID)
            }
            else {
                res.status(404).json({
                    error: 'The post information could not be retrieved.'
                })
            }
        })
    })

    module.exports = router;