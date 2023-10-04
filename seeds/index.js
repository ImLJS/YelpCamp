const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp")
  .then(() => {
    console.log("Database Connection Successfull");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const sampleName = (array) => Math.floor(Math.random() * array.length);

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20)+10;
    const camp = new Campground({
      title: `${descriptors[sampleName(descriptors)]} ${
        places[sampleName(places)]
      }`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      image: `https://source.unsplash.com/random/400x300/?camping,${i}`,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni cupiditate consequuntur odio maxime ullam quibusdam sit animi!",
      price: price
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
