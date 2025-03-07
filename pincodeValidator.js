function validatePinCode(pinCode) {
  const pinPattern = /^[1-9][0-9]{5}$/;
  if (pinPattern.test(pinCode)) {
    console.log(` Valid PIN Code: ${pinCode}`);
  } else {
    console.log(` Invalid PIN Code: ${pinCode}`);
  }
}

validatePinCode("400088");
