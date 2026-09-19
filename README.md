# citizen-service-portal

A full-stack web application that gives residents a simple way to submit and manage requests for common city services, such as pothole reports, noise complaints, and records requests.

I built this project to get hands-on experience with the type of systems used in municipal and enterprise environments. The main focus was creating a straightforward citizen-facing experience while building a REST API and backend that could reliably handle and manage incoming requests.

Live Demo:https://citizen-service-portal.netlify.app/

#Tech Stack

**Frontend:**React, TypeScript, Bootstrap, Vite
**Backend:**ASP.NET Core Web API (C#), Entity Framework Core, SQLite
Deployment:Netlify with GitHub-based CI/CD
Version Control: Git and GitHub

#Features

Submit service requests with contact information, request category, and a description of the issue
REST API for creating, viewing, updating, and managing requests
Request status updates to simulate how a municipality would track an issue from submission to completion
Swagger/OpenAPI documentation for testing and exploring API endpoints
Form validation and error handling on the frontend
CORS configuration for communication between the frontend and API
Responsive Bootstrap interface that works across desktop and mobile devices

#Architecture

The application is split into a React frontend and an ASP.NET Core backend. The frontend handles the citizen-facing forms and displays request information, while the backend handles validation, business logic, and data access.

Requests are sent between the frontend and backend through REST API endpoints. Entity Framework Core handles database operations, with SQLite used for storing service request data.

I kept the frontend and backend separate so each part of the application can be developed, tested, and deployed independently. This also makes it easier to replace or scale individual parts of the system later.



