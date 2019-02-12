const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get Date",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Get Date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {console.log(err)});
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log("addContact called");
    this.main();
  }

  getDate() {
    this.clear();
    const d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    console.log(`${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`);
    this.main();
  }

  getContactCount() {
    return this.contacts.length;
  }

  remindMe() {
    return "Learning is a life-long pursuit"
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
}
