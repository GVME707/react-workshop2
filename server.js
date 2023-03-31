const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const User = require("./libs/User");
const Customer = require("./libs/Customer");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'build')));

app.post("/api/login", (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    var result = User.login(username, password);

    if (result != null) {
        res.json({
            result: true,
            data: result
        });
    } else {
        res.json({result: false});
    }
});

app.get("/api/customer", (req, res) => {
    var data = Customer.getAll();

    res.json({
        result: true,
        data: data
    });
});

app.get("/api/customer/:customerId", (req, res) => {
    let customerId = req.params.customerId;

    var data = Customer.getById(customerId);

    res.json({
        result: true,
        data: data
    });
});

app.post("/api/customer/add", (req, res) => {
    var data = Customer.createCustomer(req.body.customer_id, req.body.title, req.body.first_name, req.body.last_name, req.body.gender);

    res.json({
        result: true,
        data: data
    });
});

app.post("/api/customer/update", (req, res) => {
    var data = Customer.updateCustomer(req.body.customer_id, req.body.title, req.body.first_name, req.body.last_name, req.body.gender);

    res.json({
        result: true,
        data: data
    });
});

app.post("/api/customer/delete", (req, res) => {
    var data = Customer.deleteCustomer(req.body.customer_id);

    res.json({
        result: true,
        data: data
    });
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {

});