# Railway Management System

A Railway Management System built with **Node.js**, **Express**, **MySQL**, and **JWT** for handling authentication. This system allows users to check available trains, book seats, and manage bookings. Admins have additional functionalities like adding new trains and updating the available seat count.

---

## Features

- **User Authentication**: Users can register, log in, and access their accounts using JWT tokens.
- **Admin Role**: Admins can add new trains and update seat availability.
- **Seat Availability Check**: Users can check the availability of trains between two stations.
- **Seat Booking**: Users can book seats on available trains (with race condition handling).
- **Booking Details**: Users can view their specific booking details.
- **Real-Time Availability**: Availability updates dynamically based on seat bookings.

---

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Token (JWT)
- **Password Hashing**: bcryptjs
- **Middleware**: Custom middleware for authorization, authentication, and race condition handling
- **Environment Configuration**: `.env` file to store secret keys and database credentials

---

## Installation

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/railway-management-system.git
cd railway-management-system
