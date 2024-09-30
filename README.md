# EVMax

EVMax is a web application designed for electric vehicle (EV) dealerships to showcase available EV models, compare features, and facilitate customer interactions. Built using React for the front-end and Strapi as a content management system (CMS) for managing inventory, EVMax provides a seamless browsing experience for customers interested in electric vehicles. Additionally, Firebase is used for authentication and Firestore is integrated for real-time chat support.

## Features

- **Browse EV Models**: Explore a wide variety of electric vehicle models.
- **Compare Features**: View and compare the features and specifications of different EVs.
- **Firebase Authentication**: Secure user login and sign-up functionality.
- **Real-Time Chat Support**: Chat with customer support in real-time, powered by Firestore.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Front-end**: React
- **Back-end**: Strapi (Headless CMS)
- **Authentication**: Firebase
- **Real-Time Chat**: Firestore
- **Styling**: CSS, CSS Modules

## Installation

1. Clone: git clone https://github.com/nathan-dinh-dev/EVMax.git
2. Navigate: cd EVMax
3. Install: npm install
4. Start: npm start

## Backend Setup

1. Navigate: cd backend
2. Install: npm install
3. Start Strapi: npm run develop

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. Set up **Authentication** and **Firestore** for your project.

3. Add your Firebase configuration to the project by replacing the placeholder values in the `.env` file:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Usage

Once the application is running, you can:

- Browse available EV models, view detailed specifications, and compare vehicles.
- Log in or sign up using Firebase authentication.
- Access real-time chat support, enabled by Firestore, for any inquiries.

## Demo

[EVMax Demo](https://www.youtube.com/watch?v=nCoODIyAl9s&t=85s)

## Contributing

Feel free to fork this repository and create a pull request if you'd like to contribute.

## License

MIT License.

## Contact

For further information, contact Nathan Dinh - [GitHub](https://github.com/nathan-dinh-dev)
