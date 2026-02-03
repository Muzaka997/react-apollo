# React Apollo GitHub Viewer

This project is a React application using Apollo Client to interact with the GitHub GraphQL API. It allows users to view and manage their GitHub repositories, displaying repository details and enabling users to star/unstar repositories.

## Features

- **View GitHub Repositories**: Displays a list of repositories for the authenticated user.
- **Star/Unstar Repositories**: Allows users to star or unstar repositories directly from the interface.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Muzaka997/react-apollo.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd react-apollo
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:  
   Create a `.env` file in the root of your project and add your GitHub token:

   ```plaintext
   VITE_GITHUB_TOKEN=your_github_token
   ```

5. **Run the application**:
   ```bash
   npm run dev
   ```
   The application should now be running on `http://localhost:3000`.

## Scripts

- **Development**: `npm run dev` - Starts the application in development mode using Vite.
- **Build**: `npm run build` - Builds the application for production.
- **Lint**: `npm run lint` - Runs ESLint on the project.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- **Styled-Components**: Allows you to write plain CSS in your JavaScript to style React components.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.

## License

This project is licensed under the MIT License.
