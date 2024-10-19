# Authentication API


This project provides an authentication API with endpoints for user signup, login, password reset, and logout. It utilizes bcrypt for password hashing, JWT for token-based authentication, nodemailer for sending emails, and mongoose for interacting with MongoDB.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/authentication-api.git
   ```

2. Install dependencies:

   ```bash
   cd authentication-api
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DB_URL=mongodb://localhost:27017/authentication-api
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=1d
   CLIENT_URL=http://localhost:3000
   COMPANY_EMAIL_USERNAME=your_company_email_username
   COMPANY_EMAIL_PASSWORD=your_company_email_password
   ```

## Important Environment Variables

- `DB_URL`: MongoDB connection URL.
- `JWT_SECRET`: Secret key for JWT token generation.
- `JWT_EXPIRES_IN`: Expiration time for JWT tokens.


## Endpoints

### Signup Endpoint

Allows users to register by providing their email, password, first name, and last name. Upon successful signup, it generates a JWT token and sets it in an HTTP-only cookie before sending the token in the response.

- **Method**: `POST`
- **Route**: `/auth/signup`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token_here"
  }
  ```

### Login Endpoint

Authenticates users by checking the provided email and password against the database. Upon successful login, it generates a JWT token and sets it in an HTTP-only cookie before sending the token in the response.

- **Method**: `POST`
- **Route**: `/auth/login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token_here"
  }
  ```

### Logout Endpoint

Clears the JWT token cookie, effectively logging the user out.

- **Method**: `POST`
- **Route**: `/auth/logout`

### Forget Password Endpoint

Initiates the process of resetting the user's password by sending a password reset email containing a reset token.



## Dependencies

- `bcryptjs`: For password hashing.
- `jsonwebtoken`: For JWT token generation and verification.
- `nodemailer`: For sending emails.
- `mailgen`: For generating email templates.
- `mongoose`: For interacting with MongoDB.

## Usage

To start the server, run:

```bash
npm run dev
```

The server will start listening on port 8800 by default.

Feel free to modify and extend the functionality as needed for your project!
