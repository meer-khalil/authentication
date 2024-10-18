# Authentication Service

This repository provides a comprehensive authentication system built using **Node.js**, **Express.js**, and **Passport.js**. It currently supports authentication via **Google** and **GitHub** OAuth providers, with plans to add Facebook authentication, email OTP verification, and SMS OTP verification in the future.

## Features

- **Google Authentication**: Secure login with Google using OAuth 2.0
- **GitHub Authentication**: Secure login with GitHub using OAuth 2.0
- **Session Management**: User sessions are managed using `express-session`
- **Environment Variable Configuration**: Credentials and sensitive information are stored securely using environment variables
  
### Upcoming Features
1. **Facebook Authentication**: OAuth-based authentication with Facebook
2. **OTP Verification via Email**: Implementing email-based OTP verification for user authentication
3. **SMS OTP Verification**: Implementing SMS-based OTP verification for user authentication

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version >= 14.x)
- **MongoDB**: Required for session storage and user data persistence
- **npm**: Node.js package manager
- **GitHub** and **Google** Developer Accounts: You will need OAuth credentials from both services

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/authentication-service.git
cd authentication-service
```

### 2. Install Dependencies

Install all necessary dependencies using npm:

```bash
npm install
```

### 3. Create a .env File

Create a `.env` file in the root directory with the following credentials:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Session Secret
SESSION_SECRET=your_session_secret

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string
```

### 4. Running the Application

To run the application in development mode:

```bash
npm run dev
```

This will start the server with nodemon, which automatically restarts the server on code changes.

### 5. OAuth Callback URLs

Set the following callback URLs in your OAuth provider developer consoles:

- **Google**: `http://localhost:3000/auth/google/callback`
- **GitHub**: `http://localhost:3000/auth/github/callback`

For production, replace `localhost:3000` with your domain.

## OAuth Setup Instructions

### 1. Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to Credentials → Create Credentials → OAuth Client ID
5. Configure the OAuth consent screen
6. Add authorized redirect URIs
7. Copy the Client ID and Client Secret to your `.env` file

### 2. GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details
4. Add the callback URL
5. Copy the Client ID and Client Secret to your `.env` file

## Current Authentication Routes

### Google Authentication
- **Login Route**: `/auth/google`
- **Callback URL**: `/auth/google/callback`
- **Logout Route**: `/auth/google/logout`

### GitHub Authentication
- **Login Route**: `/auth/github`
- **Callback URL**: `/auth/github/callback`
- **Logout Route**: `/auth/github/logout`

## Folder Structure

```
authentication-service/
├── config/
│   ├── passport.js
│   └── database.js
├── routes/
│   ├── auth.js
│   └── index.js
├── models/
│   └── User.js
├── middlewares/
│   └── auth.js
├── public/
├── views/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Future Features

### 1. Facebook Authentication
- Implementation of Facebook OAuth strategy
- User profile data integration
- Custom callback handling

### 2. OTP Verification via Email
- Email service integration using nodemailer
- OTP generation and validation
- Expiry time management
- Rate limiting

### 3. SMS OTP Verification
- SMS gateway integration (Twilio)
- Phone number verification
- Rate limiting
- Fallback mechanisms

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## Contact

For questions and support, please reach out:
- **Email**: arzishjani1613@gmail.com
- **GitHub Issues**: Create an issue in the repository

---
