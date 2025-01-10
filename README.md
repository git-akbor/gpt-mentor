<!-- git add .
git commit -m "Initial commit"
git push origin main -->

# gpt-mentor

## Task 1:

Create a Simple Landing Page:

Use HTML to structure the page with the following sections:
Header: Include a project title and a navigation menu (links can be placeholders for now).
Main Section: Write a short description of your project, its purpose, and key features (e.g., "This is a MERN stack project showcasing my skills").
Footer: Add contact information or placeholder text like "© 2025 Your Name".
Style the Page with CSS:

Add some basic styling:
Use a modern font (e.g., Google Fonts).
Add colors for the header, footer, and background.
Style the layout to be visually appealing.
Make it Responsive:

Use CSS Flexbox or Grid to make the layout adjust for different screen sizes.
Test it on both desktop and mobile views.
Optional: Add a favicon and customize the tab title to reflect your project name.

## Task 2

Create Two Additional Pages:

About Page:
Include a description of your project, its purpose, and why you built it.
Add a placeholder image to enhance the design.
Contact Page:
Include a simple contact form with fields for:
Name
Email
Message
A submit button.
Update the Landing Page:

Add working navigation links to the About and Contact pages.
CSS Enhancements:

Create a consistent style for all pages (reuse your existing CSS or improve it).
Use hover effects for links and buttons to enhance user interaction.
Style the form in the Contact page to make it visually appealing.
Responsive Design:

Ensure all pages are responsive and look good on both desktop and mobile devices.

## Task 3

Interactive Navigation:
Implement these features in your project
## task 4

Add a Basic Backend with Node.js and Express
Objective:
Set up a simple server to handle requests and serve your website. This is the first step toward building a full-stack application.

Task Details:
Initialize a Node.js Project:

Create a new directory named server inside your project.
Run npm init -y to create a package.json file.
Install Dependencies:

Install express using the command:
bash
Copy code
npm install express
Set Up a Basic Server:

Create a server.js file in the server directory.
Write code to:
Import Express.
Set up a basic server that serves your HTML files.
Use express.static to serve static files like CSS, JavaScript, and images.
Example:

javascript
Copy code
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Serve the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
Organize Your Files:

Move your existing HTML, CSS, and JavaScript files into a public directory for better organization.
Test the Server:

Run the server using the command:
bash
Copy code
node server.js
Open http://localhost:5500 in your browser to test.
## task 5

Environment Variables:
Consider using environment variables to manage configuration settings, such as the server port. This approach enhances flexibility and security, especially when deploying your application to different environments.
Example using the dotenv package:

javascript
Copy code
require('dotenv').config();
const PORT = process.env.PORT || 3000;
Ensure you add a .env file to your project root with the following content:

makefile
Copy code
PORT=3000
Remember to add .env to your .gitignore file to prevent sensitive information from being committed to version control.

Error Handling:

Implement basic error handling to manage unexpected situations gracefully. For instance, you can add middleware to handle 404 errors when a requested resource is not found.
Example:

javascript
Copy code
// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found');
});
Logging:

Incorporate logging to monitor server activity and debug issues effectively. Using middleware like morgan can provide insightful information about incoming requests.
Example:

javascript
Copy code
const morgan = require('morgan');
app.use(morgan('dev'));
Security Best Practices:

Consider implementing security best practices by using middleware such as helmet to set appropriate HTTP headers, enhancing your application's security.
Example:

javascript
Copy code
const helmet = require('helmet');
app.use(helmet());

## task 6

Day 5 Task: Integrate MongoDB into Your Application
Objective:
Enhance your application by connecting it to a MongoDB database, enabling data persistence and dynamic content management.

Task Details:
Set Up MongoDB:

Local Installation: If you prefer running MongoDB locally, download and install it from the official website.
Cloud-Based Option: Alternatively, use MongoDB Atlas to create a free cloud-based database.
Install Mongoose:

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward schema-based solution to model your application data.
Install Mongoose using npm:
bash
Copy code
npm install mongoose
Connect to MongoDB:

In your server.js file, establish a connection to your MongoDB database using Mongoose.
Example:
javascript
Copy code
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));
Replace 'mongodb://localhost:27017/yourDatabaseName' with your actual MongoDB connection string.
Create a Data Model:

Define a Mongoose schema and model for a simple data entity, such as a "Message" for your contact form submissions.
Example:
javascript
Copy code
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);
Handle Form Submissions:

Update your contact form to send data to the server using a POST request.
In your Express server, create a route to handle this POST request, validate the data, and save it to the MongoDB collection.
Example:
javascript
Copy code
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).send('Message received!');
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});
Test the Integration:

Ensure your server is running.
Use your contact form to submit data and verify that the entries are saved in your MongoDB database.
You can use tools like Postman to test the POST requests independently.
Deliverables:
Update your GitHub repository with the new code, including:
Connection to MongoDB.
Mongoose models.
Routes handling form submissions.
Share the repository link with me for review.