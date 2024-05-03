const express = require("express");
const app = express();
const Imap = require('imap');
const simpleParser = require('mailparser').simpleParser;
const cors = require('cors')


const mailRoute = require("./Routes/mailsRoute");
const ticketRoute = require("./Routes/generateTicketRoute");
const {connectToDB} = require("./DB/dbConnection");

//Connect DataBase
app.use(cors())
connectToDB();
app.use(express.json());
app.use("/mails", mailRoute);
app.use("/ticket", ticketRoute);


app.get('/' , (req , res)=>{
 res.send('<h1>Mail </h1>')
})

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("app running on port 5000");
});
