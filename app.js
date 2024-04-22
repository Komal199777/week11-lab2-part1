const jwt = require('jsonwebtoken');
// Function to create and sign a JWT
function createJWT() {
    const payload = {
       userId: 123,
      username: 'Komal'
    
    };
    const secretKey = 'komal12345'; // Replace with your secret key
  
    // Sign the JWT with the payload and secret key
    const token = jwt.sign(payload, secretKey);
  
    console.log('JWT Token:', token);
  }
  
  // Call the function to create and sign a JWT
  createJWT();

  // Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'komal12345'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJLb21hbCIsImlhdCI6MTcxMzc3MzEwMn0.kCJTbiS2e7DHTIut0YINIEyWId_B_HfhLl1NJnXjVyw';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);
// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJLb21hbCIsImlhdCI6MTcxMzc3MzE4Nn0.7h4VYwIsI2X4N6YYyQ-qloT_5cLDZXwH4TRNzli-Ryk';

// Call the function to decode the JWT
decodeJWT(jwtToken);