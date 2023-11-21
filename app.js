require('dotenv').config();

const express = require('express');
const https = require('https');
const request = require('request');

const app = express();

app.use(express.static( __dirname + "/public/" ));
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    const data = {  // JavaScript Oject
        members: [  // members: array of ojects
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    
    const jsonData = JSON.stringify(data);   // convert data to JSON format
    
    const apiKey = process.env.API_KEY;

    const listID = process.env.LIST_ID;

    const url = "https://us8.api.mailchimp.com/3.0/lists/" + `${listID}`;

    const options = {
        method: 'POST',
        auth: `sabhi:${apiKey}`
    };

    const request = https.request(url, options, function(response) {
        
        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, ()=>{
   console.log("Server is running on port 3000."); 
});

module.exports = app;