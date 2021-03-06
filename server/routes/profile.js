const express = require('express');
const Profiles = require('../models/profile');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const profiles = await Profiles.getAllProfiles();
      res.send(profiles);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .get('/:userId', async (req, res) => {
    try {
      const profile = await Profiles.getProfile(req.params.userId);
      res.send(profile);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .put('/lastLogin', async (req, res) => {
    try {
      const profile = await Profiles.updateLastLogin(req.body);
      res.send(profile);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .put('/changeProfilePicture', async (req, res) => {
    try {
      const profile = await Profiles.changeProfilePicture(req.body);
      res.send(profile);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .post('/create', async (req, res) => {
    try {
      const profile = await Profiles.createProfile(req.body);
      console.log("HELLO!?!?", profile)
      res.send(profile);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

module.exports = router;