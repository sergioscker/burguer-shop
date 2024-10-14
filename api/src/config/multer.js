import dotenv from 'dotenv';
dotenv.config();

import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

// Credenciais da AWS
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // chave de acesso
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // chave secreta
  region: process.env.AWS_REGION, // Região do bucket
});

// Configuração do multer para armazenamento de arquivos no S3
export default {
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME, // Nome do bucket no S3
    contentType: multerS3.AUTO_CONTENT_TYPE, // Para definir o tipo MIME automaticamente
    acl: 'public-read', // Definir permissões de leitura pública
    key: (_, file, callback) => {
      const fileName = `${uuidv4()}${extname(file.originalname)}`; // Nome único com uuid
      callback(null, fileName);
    },
  }),
};
