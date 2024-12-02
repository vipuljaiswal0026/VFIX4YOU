# VFix4U Project

VFix4U is a comprehensive platform designed for IT-related services. The project includes multiple services such as authentication, booking, service management, and user management. Each of these services is a separate module that interacts with each other through APIs.

## Features

- **Authentication**: Users can log in, register, and authenticate using email and Google OAuth.
- **Booking**: Users can book IT services through a seamless booking system.
- **Service Management**: Admin can manage available services, pricing, and schedule.
- **User Management**: Admin can manage user profiles, roles, and permissions.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Authentication**: JWT, Passport.js, Google OAuth 2.0
- **Database**: MongoDB
- **Containerization**: Docker
- **Environment Management**: Docker Compose
- **State Management**: Redux (optional, if needed)

## Project Structure

This project is structured as a monorepo using npm workspaces. Each service has its own directory under the `services/` folder.

### Folder Structure

