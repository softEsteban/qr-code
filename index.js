const qr = require('qrcode');
const fs = require('fs');

// Define your JSON data
const jsonData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30
};

// Convert the JSON data to a JSON string
const jsonString = JSON.stringify(jsonData);

// Generate a QR code from the JSON data
qr.toDataURL(jsonString, (err, url) => {
  if (err) {
    console.error(err);
    return;
  }

  // Save the QR code as an image file
  const filePath = 'qrcode.png'; // Change the file name and format as needed
  const qrCodeImage = url.replace('data:image/png;base64,', '');

  fs.writeFileSync(filePath, qrCodeImage, 'base64');

  console.log('QR code image saved as', filePath);
});