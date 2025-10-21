import { exec } from 'child_process';
import Pngquant from 'pngquant';

const pngquant = new Pngquant();

pngquant.compress('73kb.png', { quality: [0.6, 0.8] })
  .then(result => {
    console.log('Compression successful');
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

