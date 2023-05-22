const { Command } = require("commander");
const contacts = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      return console.table(contactList);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
      break;
    case "remove":
      const contactToDelete = await contacts.removeContact(id);
      return console.log(contactToDelete);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
