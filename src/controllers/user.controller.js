import { asyncHandler } from "../utils/asyncHandler.js";
<<<<<<< HEAD
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../service/cloudinary.service.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // Destructure required fields from the request body
  const { fullname, email, username, password } = req.body;

  // Validate that all required fields are provided and not empty
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, "All fields are required");
  }

  // Check if a user with the same email or username already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new apiError(409, "User with email or username already exist");
  }

  // Get the local path of the avatar image from the request files
  const avatarLocalPath = req.files?.avatar[0]?.path;
  if (!avatarLocalPath) {
    throw new apiError(400, "Avatar is required");
  }

  // Initialize coverImageLocalPath and assign a value if provided
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  // Upload avatar image to Cloudinary and check for successful upload
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar || !avatar.url) {
    throw new apiError(400, "Avatar file upload failed");
  }

  // Upload cover image to Cloudinary if provided and check for successful upload
  const coverImage = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : null;
  if (coverImageLocalPath && (!coverImage || !coverImage.url)) {
    throw new apiError(400, "Cover image upload failed");
  }

  // Create a new user in the database with the provided details
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username ? username.toLowerCase() : "",
  });

  // Retrieve the created user from the database without password and refreshToken fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // Check if the user was successfully created
  if (!createdUser) {
    throw new apiError(500, "Something went wrong while registering user");
  }

  // Respond with a success message and the created user details
  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "User Registered successfully"));
});

export { registerUser };
=======

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Running route",
  });
});

export default registerUser;
>>>>>>> origin/main
