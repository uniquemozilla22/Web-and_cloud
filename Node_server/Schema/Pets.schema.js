import { Schema, model } from "mongoose";

const PetsSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Pets = model("pets", PetsSchema);

export default Pets;
