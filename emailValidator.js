function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
  if (emailPattern.test(email)) {
    console.log(`✅ Valid Email: ${email}`);
  } else {
    console.log(`❌ Invalid Email: ${email}`);
  }
}

validateEmail("abc@bridgelabz.co");
validateEmail("xyz@bridgelabz.co");
validateEmail("abc@bridgelabz");
validateEmail("abc@bridgelabz.c");
validateEmail("abc@bridgelabz.com");
validateEmail("user@bridgelabz.co.in");
validateEmail("test.123@bridgelabz.co.us");
