import mongoose from "mongoose";

const connectDatabase = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://bhattaraiyogesh007:LlE4mX4SAkvyhpK0@cluster0.3ywkqds.mongodb.net/?retryWrites=true&w=majority`
  );

  if (connection) {
    console.log("database connected");
  } else {
    console.log("databasse not connected");
  }
};

export default connectDatabase;
