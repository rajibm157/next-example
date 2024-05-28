import mongoose from "mongoose";

export interface IUser {
  id: string;
  first_name: string;
  last_name?: string;
  email: string;
  password?: string;
  image?: string;
}

const userSchema = new mongoose.Schema<IUser>(
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

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
