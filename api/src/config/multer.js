import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtém o diretório atual, já que __dirname não existe em ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Configuração do multer para armazenamento de arquivos
export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (_, file, callback) => {
      callback(null, uuidv4() + extname(file.originalname));
    },
  }),
};
