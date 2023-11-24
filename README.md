# Newsletter Signup Web Application

Developed a dynamic newsletter-signup application using Node.js and Express.js, and the Mailchimp API.

## Project Structure

- `app.js`: Server file containing the main logic for handling HTTP requests, integrating with the Mailchimp API, and serving static files.
- `public/`: Folder containing static files such as images, CSS, and JS files.
  - `css/`: Stylesheets for the web application.
  - `images/`: Image files used in the project.
  - `js/`: JavaScript files for client-side scripting.
- `index.html`: Main HTML file for the newsletter signup page.
- `success.html`: HTML file displayed upon successful subscription.
- `failure.html`: HTML file displayed in case of subscription failure.

## Briefly describe what this code sample does:
    
This code creates a newsletter signup application using Node.js, Express.js, and the Mailchimp API. It allows users to enter their first name, last name, and email address on a signup form. Upon submitting the form, the application validates the input and constructs a JSON object containing the user's information. It then sends this JSON data to the Mailchimp API using an HTTPS POST request. If the subscription is successful, the application redirects the user to a success page; otherwise, it redirects them to a failure page.

Here's a breakdown of the code:

- This Node.js project utilizes Express and the Mailchimp API to facilitate user sign-ups.
- The server, configured to serve static files and handle form data, directs users to a signup form ("/signup.html") via a GET request.
- Upon form submission (POST request), user details like first name, last name, and email are gathered and structured into a JSON format.
- The server then communicates with the Mailchimp API, attempting to add the user to a specified mailing list.
- Depending on the API response status, users are directed to either a success or failure page ("/success.html" or "/failure.html").