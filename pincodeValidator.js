function validatePinCode(pinCode) {
  const pinPattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
  if (pinPattern.test(pinCode)) {
    console.log(` Valid PIN Code: ${pinCode}`);
  } else {
    console.log(` Invalid PIN Code: ${pinCode}`);
  }
}

validatePinCode("400088");
validatePinCode("A400088");
validatePinCode("400088B");
validatePinCode("400 088");
