import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

//Getting weblink from user with inquirer
inquirer
  .prompt([
    {
        message: "Welcome User, please enter your website: ",
        name: "userlink",
    },
  ])
  .then((answers) => {
    const userURL = answers.userlink;

    //Changing text to QR code using qr-image
    var qr_svg = qr.image(userURL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    //Creating an additional text file about the created User's link / QR code link
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });