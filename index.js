import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",   //refer documentation for inquirer npm package
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);//generating qr code
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));//saving qr code as png file

    fs.writeFile("URL.txt", url, (err) => {   //saving url to txt file for future reference
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
