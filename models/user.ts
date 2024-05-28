import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    image: String,
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
