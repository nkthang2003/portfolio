const fs = require('fs');
const convert = require('heic-convert');

async function main() {
  try {
    console.log('Reading images/avatar.heif...');
    const inputBuffer = fs.readFileSync('images/avatar.heif');
    console.log('Converting to JPEG...');
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.92
    });
    fs.writeFileSync('images/avatar.jpg', outputBuffer);
    console.log('Successfully created images/avatar.jpg, size:', outputBuffer.length);

    console.log('Converting to PNG...');
    const pngBuffer = await convert({
      buffer: inputBuffer,
      format: 'PNG'
    });
    fs.writeFileSync('images/avatar.png', pngBuffer);
    console.log('Successfully created images/avatar.png, size:', pngBuffer.length);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
}

main();

