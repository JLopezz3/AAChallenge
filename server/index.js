const express = require("express");
const app = express();
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//login as customer
app.post("/api/v1/customerslogin", async(req, res) => {
  const cus_email = req.body.cus_email;
  const cus_password = req.body.cus_password;
  try {
  const login = await db.query(
    "SELECT * FROM heroku_0685896544e70c1.customer WHERE cus_email = ? AND cus_password = ?",
    [cus_email, cus_password],
    (err, results) => {
      if (err) {
        res.status(200).json({
          status: "there is an error",
          results,
        });
        console.log({ err: err });
      }

      if (results.length > 0) {
        console.log(results)
        res.status(200).json({
          status: "success customer login",
          results,
        });
      } else {
        res.status(200).json({
          status: "Wrong customer login name or password!",
          results,
        });
        console.log({ message: "Wrong customer login name or password!" });
      }
    }
  );
  }catch (err) {
    console.log(err);
    }
});

//login as employee
app.post("/api/v1/employeeslogin", async(req, res) => {
  const em_email = req.body.em_email;
  const em_password = req.body.em_password;
  try {
  const login = await db.query(
    "SELECT * FROM heroku_0685896544e70c1.employee WHERE em_email = ? AND em_password = ?",
    [em_email, em_password],
    (err, results) => {
      if (err) {
        res.status(200).json({
          status: "there is an error",
          results,
        });
        console.log({ err: err });
      }

      if (results.length > 0) {
        console.log(results)
        res.status(200).json({
          status: "success employee login",
          results,
        });
      } else {
        res.status(200).json({
          status: "Wrong customer login name or password!",
          results,
        });
        console.log({ message: "Wrong customer login name or password!" });
      }
    }
  );
  }catch (err) {
    console.log(err);
    }
});

//create a employee account 
app.post("/api/v1/createemployee", async (req, res) => {
  console.log(req.body);
  const em_email = req.body.em_email;
  const em_password = req.body.em_password;
  const em_firstname = req.body.em_firstname;
  const em_lastname = req.body.em_lastname;
  const phone = req.body.phone;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const dob = req.body.dob;
  const zipcode = req.body.zipcode;


  try{
      const employee =  await db.query(
        "INSERT INTO `heroku_0685896544e70c1`.`employee` (em_email, em_password, em_firstname, em_lastname, phone, street, city, state, dob, mileage, zipcode) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?);",
        [em_email, em_password,em_firstname,em_lastname,phone,street,city,state,dob,zipcode],
        (err, results) =>{
          if (err) {
            res.status(200).json({
              status: "Your email was already chosen",
              data: results,
            });
            console.log({ message: "Your email was already chosen" });
          };
          console.log(results);

          
        });
        const employee_last_inserted =  await db.query(
          "select * from `heroku_0685896544e70c1`.`employee` where employee_id=LAST_INSERT_ID();",

          (err, results) =>{
            if (err) throw err;
            console.log(results);
            res.status(200).json({
              status: "success",
              data: results,
            });
          }
          );

      } catch (err) {
        console.log(err);
        }
      });

      //create a customer account 
app.post("/api/v1/createcustomer", async (req, res) => {
  console.log(req.body);
  const cus_email = req.body.cus_email;
  const cus_password = req.body.cus_password;
  const customer_firstname = req.body.customer_firstname;
  const customer_lastname = req.body.customer_lastname;
  const phone = req.body.phone;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const dob = req.body.dob;
  const zipcode = req.body.zipcode;


  try{
      const customer =  await db.query(
        "INSERT INTO `heroku_0685896544e70c1`.`customer` (cus_email, cus_password, customer_firstname, customer_lastname, phone, street, city, state, dob, mileage, zipcode) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?);",
        [cus_email, cus_password,customer_firstname,customer_lastname,phone,street,city,state,dob,zipcode],
        (err, results) =>{
          if (err) {
            res.status(200).json({
              status: "Your email was already chosen",
              data: results,
            });
            console.log({ message: "Your email was already chosen" });
          };
          console.log(results);

          
        });
        const customer_last_inserted =  await db.query(
          "select * from `heroku_0685896544e70c1`.`customer` where customer_id=LAST_INSERT_ID();",

          (err, results) =>{
            if (err) throw err;
            console.log(results);
            res.status(200).json({
              status: "success",
              data: results,
            });
          }
          );

      } catch (err) {
        console.log(err);
        }
      });

//get all customers info
app.get("/api/v1/getallcustomers", (req, res) => {
  const sql = "SELECT * FROM heroku_0685896544e70c1.customer;";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(200).json({
      status: "yessire",
      results,
    });
  });
});
//get all employees info
app.get("/api/v1/getallemployees", (req, res) => {
  const sql = "SELECT * FROM heroku_0685896544e70c1.employee;";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(200).json({
      status: "yessire",
      results,
    });
  });
});
//search for a flight
app.get("/api/v1/search", async (req, res) => {
  const departure_airport = req.body.departure_airport;
  const arrival_airport = req.body.arrival_airport;

    
  try{
      //const {departure_airport} = req.query;
      const results = await db.query(
          "SELECT * FROM heroku_0685896544e70c1.flight WHERE departure_airport LIKE ? and arrival_airport LIKE ? ", 
          //"SELECT * FROM FLIGHTs WHERE departure_airport || ' ' || arrival_airport ILIKE $1",[`%${req.body.departure_airport}$%`])
          [departure_airport, arrival_airport],
          (err, results) =>{
            if (err) {
              res.status(200).json({
                status: "The airport name is not in the database",
                data: results,
              });
              console.log({ message: "not found" });
            };
            console.log(results);
            res.status(200).json({
              status: "success",
              results,
            });
            
          });
        } catch (err) {
          console.log(err);
          }
        });
//create booking
app.post("/api/v1/createbooking", async (req, res) => {
  console.log(req.body);  
    const fli_id = req.body.fli_id;
    const customer_id = req.body.customer_id;
    const total_cost = req.body.total_cost;
    const fare_id = req.body.fare_id;
  try{

      const buyticket = await db.query(
          "INSERT INTO heroku_0685896544e70c1.bookings (fli_id, customer_id, book_date, total_cost, fare_id) VALUES (?, ?, NOW(), ?, ?);",
          [fli_id, customer_id, total_cost, fare_id],
          (err, results) =>{
            if (err) {
              res.status(200).json({
                status: "can not create booking",
                data: results,
              });
              console.log({ message: "not found" });
            };
            console.log(results);
            
          }
          
          
          );
          const customer_last_inserted =  await db.query(
            "select * from `heroku_0685896544e70c1`.`bookings` where book_ref=LAST_INSERT_ID();",
  
            (err, results) =>{
              if (err) throw err;
              console.log(results);
              res.status(200).json({
                status: "success",
                data: results,
              });
            }
            );
        } catch (err) {
          console.log(err);
          }
        });

app.post("/api/v1/createbooking", async (req, res) => {
  console.log(req.body);  
    const fli_id = req.body.fli_id;
    const customer_id = req.body.customer_id;
    const total_cost = req.body.total_cost;
    const fare_id = req.body.fare_id;
  try{

      const buyticket = await db.query(
          "INSERT INTO heroku_0685896544e70c1.bookings (fli_id, customer_id, book_date, total_cost, fare_id) VALUES (?, ?, NOW(), ?, ?);",
          [fli_id, customer_id, total_cost, fare_id],
          (err, results) =>{
            if (err) {
              res.status(200).json({
                status: "can not create booking",
                data: results,
              });
              console.log({ message: "not found" });
            };
            console.log(results);
            
          }
          
          
          );
          const customer_last_inserted =  await db.query(
            "select * from `heroku_0685896544e70c1`.`bookings` where book_ref=LAST_INSERT_ID();",
  
            (err, results) =>{
              if (err) throw err;
              console.log(results);
              res.status(200).json({
                status: "success",
                data: results,
              });
            }
            );
        } catch (err) {
          console.log(err);
          }
        });
//create tickets
app.post("/api/v1/createticket", async (req, res) => {
  console.log(req.body);  
    const fli_id = req.body.fli_id;
    const customer_id = req.body.customer_id;
    const total_cost = req.body.total_cost;
    const fare_id = req.body.fare_id;
  try{

      const buyticket = await db.query(
          "INSERT INTO `heroku_0685896544e70c1`.`ticket` (, `baggage_claim_number`, `book_ref`, `fare_id`, `taxes`) VALUES ('1234567', '123456', '3000001', '2011', '8.25');",
          [fli_id, customer_id, total_cost, fare_id],
          (err, results) =>{
            if (err) {
              res.status(200).json({
                status: "can not create booking",
                data: results,
              });
              console.log({ message: "not found" });
            };
            console.log(results);
            
          }
          
          
          );
          const customer_last_inserted =  await db.query(
            "select * from `heroku_0685896544e70c1`.`bookings` where book_ref=LAST_INSERT_ID();",
  
            (err, results) =>{
              if (err) throw err;
              console.log(results);
              res.status(200).json({
                status: "success",
                data: results,
              });
            }
            );
        } catch (err) {
          console.log(err);
          }
        });

        //get all flights
app.get("/api/v1/getallflights", (req, res) => {
  const sql = "SELECT * FROM heroku_0685896544e70c1.flight;";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(200).json({
      status: "yessire",
      results,
    });
  });
});

// add payment
app.post("/api/v1/customerpayment", async (req, res) => {
  console.log(req.body);  
    const cus_id = req.body.cus_id;
    const full_name = req.body.full_name;
    const card_number = req.body.card_number;
    const exp_month = req.body.exp_month;
    const exp_year = req.body.exp_year;

    const customer_firstname = req.body.customer_firstname;
    const customer_lastname = req.body.customer_lastname;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;

  try{

      const payment = await db.query(
          "INSERT INTO heroku_0685896544e70c1.cus_payment ( full_name, card_number, exp_month, exp_year, customer_firstname, customer_lastname, street, city, state, zipcode) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);          ",
          [full_name, card_number, exp_month, exp_year, customer_firstname, customer_lastname, street, city, state, zipcode]
          
          
          );
          const paymentinserted =  await db.query(
            "select * from heroku_0685896544e70c1.cus_payment where payment_id=LAST_INSERT_ID();",
  
            (err, results) =>{
              if (err) throw err;
              console.log(results);
              res.status(200).json({
                status: "success",
                data: results,
              });
            }
            );
        } catch (err) {
          console.log(err);
          }
        });


app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000!");
});

