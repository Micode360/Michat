const res = require("express/lib/response");
const User = require("../models/usermodel");
const { singleImageUpload } = require("../utils/imageUploader");
const uuid = require("uuid");
const dotenv = require("dotenv");
dotenv.config();

exports.getPrivateData = async (req, res, next) => {
    try {
        let email = req.body.email;
        const user = await User.findOne({ email });
        res.status(200).json(user);

    } catch (error) {
        throw error;
    }
}


exports.imageAPI = async (req, res, next) => {
    let AWS_s3 = req.s3;

    try {
        let image = await singleImageUpload(req), 
        ext = image.openedFiles[0].mimetype.split("/")[1],
        randNameId = uuid.v4();
       
        
    //    await AWS_s3.upload({
    //         Bucket: process.env.BUCKET_NAME,
    //         Key: `${randNameId}.${ext}`,
    //         Body: image.openedFiles[0].filepath,
    //     }, (err, data) => {
    //         if (err) {
    //             return err;
    //         }
    //         res.status(200).json(data);
    //     })


        let params = {
          Bucket: process.env.BUCKET_NAME,
          Key: `${randNameId}.${ext}`,
          Expires: 60,
          ContentType: image.openedFiles[0].mimetype
        }
      
      
        await AWS_s3.getSignedUrl('putObject', params, function(err, signedURL) {
        if(err) {
          console.log(err);
          return next(err);
        } else {
          return res.json({
            postURL: signedURL,
            getURL: signedURL.split("?")[0]
          })
        }
      });
      
      
        
      

    } catch (error) {
        console.log(error, "catch error")
        res.status(400).json({ error });
    }
}

