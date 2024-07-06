import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
<<<<<<< HEAD
    username: {
      type: String,
=======
    usernamea: {
      typr: String,
>>>>>>> origin/main
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
<<<<<<< HEAD
      type: String,
=======
      typr: String,
>>>>>>> origin/main
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
<<<<<<< HEAD
      type: String,
=======
      typr: String,
>>>>>>> origin/main
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
<<<<<<< HEAD
      type: String, // cloudinary url
=======
      type: String, //cloudinary url
>>>>>>> origin/main
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
<<<<<<< HEAD
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

=======
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
>>>>>>> origin/main
export const User = mongoose.model("User", userSchema);
