# Decentralized Twitter V0.1

This codebase is a client-side application that fetches recommended profiles from the Lens Protocol API and displays them in a decentralized Twitter-like interface.

## Getting Started

Before running the application, ensure that you have a working installation of Node.js and the required dependencies by running `npm install` in the project directory.

To start the application, run `npm start` in the project directory. The application will be served on `http://localhost:3000`.

## Usage

Upon launching the app, recommended profiles will be fetched from the Lens Protocol API and displayed in profile cards. The cards contain basic information about the recommended profiles and can be clicked to display the full profile.

If there are any errors or the data is still loading, a loading screen will be displayed until the data is ready.

## Dependencies

This codebase uses the following dependencies:

- `@apollo/client`: A client for GraphQL APIs
- `react`: A JavaScript library for building user interfaces
- `react-dom`: A package that provides DOM-specific methods for React
- `graphql`: A query language for APIs
- `tailwindcss`: A utility-first CSS framework for rapid UI development

## Contributing

Contributions to this codebase are welcome. Please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

This codebase is licensed under the MIT License. See the `LICENSE` file for more information.
