const express = require("express");
const { redirect } = require("express/lib/response");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then((drones) => {
    res.render("drones/list", { drones });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  Drone.create({ name, propellers, maxSpeed }).then(() =>
    res.redirect("/drones")
  );
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  Drone.findById(id).then((drone) => {
    res.render("drones/update-form", drone);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  Drone.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed },
    { new: true }
  ).then(() => res.redirect("/drones"));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  Drone.findByIdAndDelete(id).then(res.redirect("/drones"));
});

module.exports = router;
