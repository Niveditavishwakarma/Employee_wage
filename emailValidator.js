function validateEmail(email) {
  const emailPattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
  if (emailPattern.test(email)) {
    console.log(`✅ Valid Email: ${email}`);
  } else {
    console.log(`❌ Invalid Email: ${email}`);
  }
}

validateEmail("abc@bridgelabz.co");
validateEmail("abc.xyz@bridgelabz.co");
validateEmail("xyz@bridgelabz.co.in");
