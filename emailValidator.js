function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email)) {
    console.log(`✅ Valid Email: ${email}`);
  } else {
    console.log(`❌ Invalid Email: ${email}`);
  }
}

validateEmail("abc@bridgelabz.co");
validateEmail("xyz@bridgelabz.com");
validateEmail("test123@bridgelabz.in");
