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
## Ignoring Files and Folders in Git

To ignore specific files and folders in your Git repository, you can create a `.gitignore` file in the root directory of your project. Add the names of the files and folders you want to ignore to this file. For example:

```
# Ignore node_modules folder
node_modules/

# Ignore log files
*.log

# Ignore environment variables
.env

# Ignore build output
dist/
build/

# Ignore system files
.DS_Store
Thumbs.db
```

This will ensure that Git does not track these files and folders, keeping your repository clean and focused on the relevant code.