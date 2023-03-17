
const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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

const validateImage = [//pass as middleware with the correct fields
    // check('payload')
    //     .exists({ checkFalsy: true })
    //     .withMessage("Please provide an image File"),
    handleValidationErrors
];



const router = express.Router()
router.use(fileUpload());//AWS

router.post("/upload", validateImage, async (req, res) => {
    // console.log(req.files, 'reqfiles')
    // console.log(req.body.safeName, 'reqfiles')


    if (!req.files) {
        // console.log('oops, no files!')
        return { "fileError": "no files!" }
    }
    const file = req.files.file;
    // console.log(file, ' file from reqfiles')

    // const fileName = req.body.user + req.files.file.name;//non-random, if a person uploads the same filename, it will be replaced in the S3 bucket
    const fileName = `${Date.now() + req.body.safeName}`;// non random, but bucket can fill with duplicates

    const bucketParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
        Body: file.data,
        ContentType: file.mimetype,
        ACL: 'public-read'
    };

    try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        data.url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${fileName}`
        res.send(data)
    } catch (err) {
        console.log("Error", err);
    }
    return { "url": `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${fileName}` }
    // console.log({ "url": `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${fileName}` })
});


module.exports = router
