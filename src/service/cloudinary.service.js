import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration- PERMISSION OF FILE UPLOAD

cloudinary.config({
  cloud_name: process.env.COLUDINARY_CLOUD_NAME,
  api_key: process.env.COLUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //uploaded successfully or not
<<<<<<< HEAD
    // console.log("file uploaded Successfully", response.url);
    fs.unlinkSync(localFilePath);
=======
    console.log("file uploaded Successfully", response.url);

>>>>>>> origin/main
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as upload operation got failed
    return null;
  }
};
<<<<<<< HEAD

export { uploadOnCloudinary };
=======
>>>>>>> origin/main
