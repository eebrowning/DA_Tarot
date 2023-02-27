
const express = require('express')


/////////AWS////////
const fileUpload = require("express-fileupload");

const {
    S3Client,
    PutObjectCommand
} = require("@aws-sdk/client-s3");

const s3Config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-west-1",
};

const s3Client = new S3Client(s3Config);
//////////////////

const router = express.Router()
router.use(fileUpload());//AWS

router.post("/upload", async (req, res) => {


    const file = req.files.file;
    const fileName = req.files.file.name;

    const bucketParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
        Body: file.data,
        ContentType: file.mimetype,
        ACL: 'public-read'
    };

    try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        res.send(data)
    } catch (err) {
        console.log("Error", err);
    }
});


module.exports = router
