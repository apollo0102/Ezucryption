import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
@Injectable()
export class MediaService {
  constructor(private readonly configService: ConfigService) {}

  async uploadPublicFile(dataBuffer: Buffer, filename: string) {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise();

    return { fileUrl: uploadResult.Location };
  }
}
