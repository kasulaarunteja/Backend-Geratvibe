

const express = require('express');

const Movie = require('../models/movie.model');


const router = express.Router();


router.post('/movie', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.send(movie);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
}) 

router.get("/movie", async (req, res) => {
    try {
        const movie = await Movie.find().lean().exec()
        res.send(movie)
        
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.patch("/movie/:id", async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(movie);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/movie/:id", async (req, res) => {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(movie);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  



module.exports = router;