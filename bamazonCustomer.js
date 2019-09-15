var mysql = require("mysql");
var prompt = require('prompt');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Vicente11",
  database: "bamazon"
});

function start() {
  //prints the items for sale and their details
  connection.query('SELECT * FROM Products', function (err, res) {
    if (err) throw err;

    console.log('Welcome to Bamazon')

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
      console.log('--------------------------------------------------------------------------------------------------');
    }
  })
};
start();