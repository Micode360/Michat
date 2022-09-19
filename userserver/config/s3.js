const AWS = require('aws-sdk');
const dotenv = require("dotenv");
dotenv.config();



// The name of the bucket that you have created
const BUCKET_NAME = process.env.BUCKET_NAME;


//Configuring s3 database
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
});


//uploading file to the bucket
exports.S3UploadFile = async (originalFilename, filepath) => {
    try {
      let uploadResult = await s3.upload({
        Body: filepath,
        Bucket: BUCKET_NAME,
        Key: originalFilename,
    }).promise()
    console.log(uploadResult, "Success");
    return uploadResult;
    }catch(err) {
      console.log("Error", err);
      throw err;
    }

}

 //Deleting from the bucket
exports.S3DeleteFile = async (key, res) => {
   await s3.deleteObject({
        Bucket:BUCKET_NAME,
        Key: key
      },(err,data) =>{
        if(err) return err;
        return { message: 'File Uploaded succesfully', data };
      })
}


exports.S3UpdateFile = async (originalFilename, filepath) => {

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
        Expires: 60 * 24,
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

