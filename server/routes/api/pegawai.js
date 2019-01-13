const express = require('express');
const router = express.Router();
//  const mongodb = require('mongodb'); Add Posts delete POSTS
const MongoClient = require('mongodb').MongoClient;

async function loadPostCollection() {
    const mongo_uri = 'mongodb://localhost:27017';
    const client = await MongoClient.connect(mongo_uri, {useNewUrlParser: true});
    return client
        .db('post')
        .collection('post');

}

//get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});
module.exports = router;
