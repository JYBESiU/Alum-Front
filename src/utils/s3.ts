import * as AWS from "aws-sdk";
import {
  bucketEndpoint,
  bucketName,
  region,
} from "./constants";

const endpoint = new AWS.Endpoint(bucketEndpoint);

const params = {
  Bucket: bucketName,
  CORSConfiguration: {
    CORSRules: [
      {
        AllowedHeaders: ["*"],
        AllowedMethods: ["GET", "PUT"],
        AllowedOrigins: ["*"],
        MaxAgeSeconds: 3000,
      },
    ],
  },
};

export const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_KEY_ID!,
  },
});

S3.putBucketCors(params);

export const uploadToS3 = async (
  file: Blob,
  fileName: string
) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ContentType: file.type,
    ACL: "public-read",
  };

  try {
    const data = await S3.upload(params).promise();
    console.log("File uploaded successfully", data);
  } catch (error) {
    console.error("Error uploading file", error);
  }
};
