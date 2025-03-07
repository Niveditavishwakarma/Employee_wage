function validatePinCode(pinCode) {
  const pinPattern = /^[1-9][0-9]{5}$/;
  if (pinPattern.test(pinCode)) {
    console.log(` Valid PIN Code: ${pinCode}`);
  } else {
    console.log(` Invalid PIN Code: ${pinCode}`);
  }
}

validatePinCode("400088");
validatePinCode("000123");
validatePinCode("4008A8");
validatePinCode("1234");
validatePinCode("1234567");
