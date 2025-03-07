function validateEmail(email) {
  const emailPattern =
    /^[a-zA-Z0-9][a-zA-Z0-9._+-]*@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
  if (emailPattern.test(email)) {
    console.log(`✅ Valid Email: ${email}`);
  } else {
    console.log(`❌ Invalid Email: ${email}`);
  }
}

validateEmail("abc_xyz@bridgelabz.co.us");
validateEmail("abc+xyz@bridgelabz.co.uk");
validateEmail("abc@bridgelabz.c");
validateEmail("abc@bridgelabz.co.india");
