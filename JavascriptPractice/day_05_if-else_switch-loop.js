let name = "bajrang";

// if-else statement to check if name is "bajrang"
if (name === "bajrang") {
  console.log("Hello, Bajrang!");
} else {
  console.log("Hello, stranger!");
}

// switch statement to check the length of name
switch (name.length) {
  case 0:
    console.log("Your name is empty.");
    break;
  case 1:
    console.log("Your name has only one letter.");
    break;
  case 2:
    console.log("Your name has two letters.");
    break;
  default:
    console.log("Your name is longer than two letters.");
    break;
}
