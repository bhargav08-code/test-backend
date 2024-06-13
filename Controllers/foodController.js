import foodModel from "../Models/FoodModel.js";
import fs from "fs";
//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Issue While Adding Food" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Deleted successFully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { addFood, listFood, removeFood };

//A controller function that will handle the addition of a food item. It will use the foodModel to save a new food item to the database.
