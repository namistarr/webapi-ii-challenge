const express = require('express');
const db = require('../data/db.js');
const router = express.Router();

//GET array of all post objects
router.get('/', (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json({
            error: 'The posts information could not be retrieved.'
        }));
    });

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
                });
            };
        });
    });

//GET returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id/comments', (req, res) => {
    
})

//POST creates a post using the information sent inside the `request body`
router.post('/', (req,res) => {
    const post = req.body;
    console.log('console logging post', post) 
    if(post.contents && post.title) {
        db.insert(post)
            .then(newPost => {
                console.log('newpost:', newPost)
                res.status(201).json(newPost);
            })            
            .catch(err => {
                res.status(500).json({
                    error: 'There was an error while saving the post to the database.'
                });
            });
    }
    else {
        res.status(400).json({
            error: 'Please provide title and contents for the post.'
        });
    };

});

//POST creates a comment for the post with the specified id using information sent inside of the `request body`.
router.post('/:id/comments', (req, res) => {
    const postID = req.params.id;
    const comment = req.body;
})

//PUT updates the post with the specified `id` using data from the `request body`
router.put('/:id', (req, res) => {
    
})

module.exports = router;