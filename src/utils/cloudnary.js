import { v2 as cloudinary } from "cloudinary";
import fs from fs
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const  uploadFileOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File Has Been Uploaded",response.url)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file got failed to upload
        return null;
    }
}

export default uploadFileOnCloudinary



